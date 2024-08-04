import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap"; 

function Footer() {
  return (
    <footer className="bg-light py-4 mt-4">
      <Container>
        <Row className="d-none d-md-flex">
          <Col md={3}>
            <h6>Account</h6>
            <ul className="list-unstyled">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Redeem a Gift Card</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Environmental Initiatives</a></li>
              <li><a href="#">Factories</a></li>
              <li><a href="#">DEI</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Get Help</h6>
            <ul className="list-unstyled">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Bulk Orders</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Connect</h6>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Our Stores</a></li>
            </ul>
          </Col>
        </Row>
        
        {/* Accordion for smaller screens */}
        <Accordion className="d-md-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="no-arrow">Account</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#">Log In</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Redeem a Gift Card</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="no-arrow">Company</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#">About</a></li>
                <li><a href="#">Environmental Initiatives</a></li>
                <li><a href="#">Factories</a></li>
                <li><a href="#">DEI</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">International</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="no-arrow">Get Help</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Bulk Orders</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="no-arrow">Connect</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Our Stores</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Row className="mt-4">
          <Col md={12} className="text-center">
            <h6>Sign up to receive 15% off your first order.</h6>
            <Form inline="true" className="d-flex justify-content-center">
              <Form.Control type="email" placeholder="Email Address" className="mr-2" />
              <Button variant="dark">→</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col md={12}>
            <ul className="list-unstyled d-flex justify-content-center mb-2">
              <li className="mx-2"><a href="#">Privacy Policy</a></li>
              <li className="mx-2"><a href="#">Terms of Service</a></li>
              <li className="mx-2"><a href="#">Do Not Sell or Share My Personal Information</a></li>
              <li className="mx-2"><a href="#">CA Supply Chain Transparency</a></li>
              <li className="mx-2"><a href="#">Vendor Code of Conduct</a></li>
              <li className="mx-2"><a href="#">Sitemap Pages</a></li>
              <li className="mx-2"><a href="#">Sitemap Products</a></li>
            </ul>
            <p>© 2024 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
