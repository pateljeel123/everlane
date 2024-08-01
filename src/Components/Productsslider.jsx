 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function Productsslider() {
  return (
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
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/7ba15f6d_6642/womens-viscose-knit-pleated-skirt-bone-parsnip-gingham" alt="" />
              <p>The Knit Pleated Skirt - ₹15300</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/6df5e739_12f2/womens-cotton-oversized-cocoon-sweater-parsnip" alt="" />
              <p>The Cocoon Crew in Everyday Cotton - ₹9460</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/85ef7234_0c3c/womens-washable-silk-oversized-shirt-chanterelle" alt="" />
              <p>The Boyfriend Shirt in Washable Silk - ₹14440</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/4e640143_a0a2/womens-linen-cottage-shirt-dress-black" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        {/* Add other slides here */}
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/10f364c8_6741/womens-cotton-phoebe-trouser-white" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/b2ab5f8e_0f24/womens-viscose-knit-pleated-dress-bone-parsnip-gingham" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <Link to="/productdata" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img style={{ height: "100%", width: "100%", objectFit: 'cover' }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/66e20e2c_cdfd/womens-way-high-drape-pant-seagrass" alt="" />
              <p>The Frolic Dress in Linen - ₹12720</p>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Productsslider;
