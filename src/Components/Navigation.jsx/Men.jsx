// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap"; 


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Import autoplay styles

// Import Bootstrap styles (if not already included in your project)
import 'bootstrap/dist/css/bootstrap.min.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

 
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Men() {
  const categories = [
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_900/v1/i/dc459177_c948.jpg" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_900/v1/i/5614138b_3180.jpg", label: "TOPS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/ed4b651f_0d02.jpg", label: "JEANS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/a7f8f15b_8d46.jpg", label: "PANTS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/3d6b6c5f_a6ef.jpg", label: "TEES" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/6c06d252_0f62.jpg", label: "SHOES & ACCESSORIES" }
  ];
  return (
    <>
    <div className="container-fluid p-0">
      <div className="row justify-content-center m-0">
        <div className="col-12 p-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}  // Configure autoplay
            className="mySwiper"
          >
            <SwiperSlide>
              <img 
                src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/287f132e_50cd.jpg" 
                alt="" 
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F3bee793d231b4b79b90b22f1f6878330" 
                alt="" 
                className="img-fluid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F43d90a790648495a99a82f6078a9c2dd" 
                alt="" 
                className="img-fluid"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      
    </div>

    <div className="container-fluid my-5">
      <h1 className="text-center mb-4">Shop by Category</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 justify-content-center">
        {categories.map((item, index) => (
          <div className="col text-center" key={index}>
            <img 
              className="img-fluid" 
              style={{ height: "350px", objectFit: "cover" }} 
              src={item.src} 
              alt={item.label} 
            />
            <h5 className="mt-2">{item.label}</h5>
          </div>
        ))}
      </div>
    </div>

    <div className=' container-fluid p-5' >
                <div className="row p-3 pt-0">
                    <div className='col-4 p-1'>
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/3200df9e_01ba.jpg)", height: "740px", backgroundSize: "cover" }} >
                            <h1  className='color1'>New Arrivals</h1>
                            <button  className='builder-block-btn'>shop The latest</button>
                        </div>
                    </div>
                    <div className="col-4 p-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/877c313a_c1d9.jpg)", height: "740px", backgroundSize: "cover" }} >
                            <h1 className='color1'>Crisp & Cool</h1>
                            <button  className='builder-block-btn'>SHOP LINEN</button>
                        </div>
                    </div>
                    <div className="col-4 p-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/7b0a7637_38b1.jpg)", height: "740px", backgroundSize: "cover" }} >
                            <h1  className='color1'>Best-Selling Tees</h1>
                           <div style={{display:"flex",gap:"5px"}}>
                           <button  className='builder-block-btn'>SHOP NOW</button>
                           <button className='builder-block-btn'>THE TEE GUIDE</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='jeel'>
      <h5 style={{ marginTop: "20px", textAlign: "center" }}>Almost Fall Vibes</h5>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/ea9279e5_53ae/mens-essential-organic-crew-uniform-golden-oak" alt="" />
              <p>The Knit Pleated Skirt - ₹15300</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/fcdab92f_170f/mens-stretch-twill-5-pckt-pant-navy" alt="" />
              <p>The Cocoon Crew in Everyday Cotton - ₹9460</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/62128ced_c62d/mens-linen-ss-shirt-cocoa" alt="" />
              <p>The Boyfriend Shirt in Washable Silk - ₹14440</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/cf701028_0ad7/mens-good-earth-cotton-polo-spring-lake" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        {/* Add other slides here */}
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/d3b3e644_5155/mens-renew-backpack-slate-grey" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/843555d7_80cd/mens-linen-ls-shirt-kalamata" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/mendata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_828,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/c739d31a_f434/mens-seersucker-short-black" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div className="container-fluid p-0">
      <div className="position-relative text-center">
        <img
          src="https://media.everlane.com/image/upload/c_scale,dpr_1.5,f_auto,q_65,w_auto/v1/i/193bfd51_f377.png"
          alt="Mission Banner"
          className="img-fluid w-100"
          style={{ height: '60vh', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white">
          <h1 className="fw-bold text-dark">We're on a Mission To Clean Up the Industry</h1>
          <p className='text-dark'>Read about our progress in our latest Impact Report.</p>
          <button className="btn btn-light btn-lg text-dark" aria-label="Learn more about our mission">LEARN MORE</button>
        </div>
      </div>
    </div>

    <div className="container my-5 text-center">
      <div className="row  ">
        <div className="col-md-6">
          <div className="mb-3">
            <h2 className="h4">Everlane Everywhere</h2>
          </div>
          <img
            src="https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/8223fe7a_9801.png"
            alt="Everlane Everywhere"
            className="img-fluid"
          />
          <p className="mt-3">You've got vacation plans. We've got looks to pack.</p>
          <Link to="/read-more">Read more</Link>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <h2 className="h4">Everlane Everywhere</h2>
          </div>
          <img
            src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/380b8890_5d4f.png"
            alt="Everlane Everywhere"
            className="img-fluid"
          />
          <p className="mt-3">See the sustainability efforts behind each of our products.</p>
          <Link to="/read-more">Read more</Link>
        </div>
      </div>
    </div>


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
    </>
  )
}

export default Men;
