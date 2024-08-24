  import { useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import Offcanvas from "react-bootstrap/Offcanvas";
  import { BsSearch, BsPerson, BsCart } from "react-icons/bs";
  import { Link } from "react-router-dom";
  import { useCart } from "./CartContext"; 
  import { Modal, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';

  const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [formType, setFormType] = useState('signup'); 
    const { cart, removeFromCart, updateQuantity } = useCart();

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);

    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const handleQuantityChange = (itemId, change) => {
      updateQuantity(itemId, Math.max(1, cart.find(item => item.id === itemId).quantity + change));
    };

    const calculateTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleShowLogin = () => {
      setFormType('signup'); 
      setShowLogin(true);
    };

    const handleCloseLogin = () => setShowLogin(false);

    const handleFormSwitch = (type) => {
      setFormType(type);
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;

      if (formType === 'login') {
        const storedUser = localStorage.getItem('user');
        const user = storedUser ? JSON.parse(storedUser) : null;
        
        if (user && user.email === email && user.password === password) {
          alert('Login successful');
        } else {
          alert('Invalid credentials');
        }
      } else {
        const newUser = { email, password };
        localStorage.setItem('user', JSON.stringify(newUser));
        alert('Signup successful');
        handleFormSwitch('login');
      }
    };

    const handleResetPassword = () => {
      alert('Password reset link has been sent to your email.');
    };

    return (
      <>
        {/* Combined Fixed Sale Text and Navbar */}
        <div className="fixed-header">
          <div className="fixed-sale-text">
            <p
              className="text-center"
              style={{
                fontSize: "13px",
                margin: "0",
                backgroundColor: "#EEFDC2",
                boxSizing: "border-box",
              }}
            >
              The Pre-Fall Sale: 20% off when you spend $200, 30% off when you
              spend $300. Applied at checkout. Shop Women Shop Men
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
                <ul className="navbar-nav mb-2 mb-lg-0">
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
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/search">
                      <BsSearch />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={<BsPerson />}
                      className="nav-link"
                      variant="link"
                      onClick={handleShowLogin}
                    >
                      <Dropdown.Item onClick={() => handleFormSwitch('login')}>
                        Login
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleFormSwitch('signup')}>
                        Signup
                      </Dropdown.Item>
                    </DropdownButton>
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
        <Offcanvas
          show={showCart}
          onHide={handleCloseCart}
          placement="end"
          className="custom-offcanvas"
        >
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
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        {item.image1 && (
                          <img
                            src={item.image1}
                            alt={item.name}
                            style={{
                              width: "120px",
                              height: "120px",
                              objectFit: "cover",
                              marginRight: "10px",
                            }}
                          />
                        )}
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <p className="mb-1">{item.price}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm ms-2"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger btn-sm ms-3"
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

        {/* Modal for Login/Signup */}
        <Modal show={showLogin} onHide={handleCloseLogin} centered size="lg">
          <Modal.Body className="d-flex p-0">
            {/* Left section */}
            <div className="col-md-6 p-4 d-flex flex-column justify-content-center" style={{ height: '500px' }}>
              {formType === 'login' ? (
                <>
                  <h4 className="text-center mb-4">Login</h4>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-4 w-100">
                      Login
                    </Button>
                  </Form>
                  <div className="mt-3 text-center">
                    <p>
                      Don’t have an account?{' '}
                      <span
                        style={{ color: '#007bff', cursor: 'pointer' }}
                        onClick={() => handleFormSwitch('signup')}
                      >
                        Sign up
                      </span>
                    </p>
                    <p>
                      <span
                        style={{ color: '#007bff', cursor: 'pointer' }}
                        onClick={handleResetPassword}
                      >
                        Reset password
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-center mb-4">Sign Up</h4>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-4 w-100">
                      Sign Up
                    </Button>
                  </Form>
                  <div className="mt-3 text-center">
                    <p>
                      Already have an account?{' '}
                      <span
                        style={{ color: '#007bff', cursor: 'pointer' }}
                        onClick={() => handleFormSwitch('login')}>
                        Login
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
            {/* Right section */}
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://media.everlane.com/image/upload/c_fill,w_384,ar_400:625,q_auto,dpr_1.0,f_auto,fl_progressive:steep//signup-modal"
                alt="Signup"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  export default Navbar;
