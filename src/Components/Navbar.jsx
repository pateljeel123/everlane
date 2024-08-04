import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsSearch, BsPerson, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <p className="text-center" style={{ fontSize: "13px", margin: "10px", backgroundColor: "#EEFDC2", boxSizing: 'border-box' }}>
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
            onClick={handleShow}
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
                <Link className="nav-link" to="#">
                  <BsPerson />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <BsCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/women" onClick={handleClose}>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/men" onClick={handleClose}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleClose}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/more" onClick={handleClose}>
                More
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
