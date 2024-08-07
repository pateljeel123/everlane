import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch, BsPerson, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Adjust this import based on your actual path

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showImage, setShowImage] = useState(false); // Add state for showing the image
  const { cart, removeFromCart, updateQuantity } = useCart(); // Destructure cart, removeFromCart, and updateQuantity from useCart

  const handleCloseNav = () => setShowNav(false);
  const handleShowNav = () => setShowNav(true);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const handleQuantityChange = (itemId, change) => {
    setCart(cart.map(item =>
      item.id === itemId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
    updateQuantity(itemId, Math.max(1, item.quantity + change)); // Update the quantity in the cart context
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleToggleImage = () => setShowImage(!showImage); // Toggle the image visibility

  return (
    <>
      {/* Combined Fixed Sale Text and Navbar */}
      <div className="fixed-header">
        <div className="fixed-sale-text">
          <p className="text-center" style={{ fontSize: "13px", margin: "0", backgroundColor: "#EEFDC2", boxSizing: 'border-box' }}>
            The Pre-Fall Sale: 20% off when you spend $200, 30% off when you spend $300. Applied at checkout. Shop Women Shop Men
          </p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="offcanvasNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShowNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              EVERLANE
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/women">
                    Women
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/men">
                    Men
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/more">
                    More
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    <BsSearch />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={handleToggleImage}>
                    <BsPerson />
                  </Link>
                </li>
                <li className="nav-item position-relative">
                  <Link className="nav-link" to="#" onClick={handleShowCart}>
                    <BsCart />
                    {cart.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Offcanvas for Navigation */}
      <Offcanvas show={showNav} onHide={handleCloseNav}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/women" onClick={handleCloseNav}>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men" onClick={handleCloseNav}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleCloseNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/more" onClick={handleCloseNav}>
                More
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Offcanvas for Cart */}
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      {item.image1 && (
                        <img
                          src={item.image1}
                          alt={item.name}
                          style={{ width: "120px", height: "120px", objectFit: "cover", marginRight: "10px" }}
                        />
                      )}
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <p className="mb-1">{item.price}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>{calculateTotalPrice()}</strong>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Conditional rendering for the image */}
      {showImage && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img src="/path/to/your/image.png" alt="Person" style={{ width: '300px', height: 'auto' }} />
        </div>
      )}

      {/* Custom CSS */}
      <style>
        {`
          .fixed-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000; /* Ensure the header stays on top of other content */
          }
          .fixed-sale-text {
            background-color: #EEFDC2;
            padding: 10px;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
          }
          .navbar {
            background-color: #fff; /* Adjust the background color as needed */
          }
          .custom-offcanvas {
            width: 350px; /* Adjust width as needed */
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
