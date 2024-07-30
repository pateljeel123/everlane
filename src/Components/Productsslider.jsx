import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Productsslider() {
  return (
    <div>
      <h5 className='jeel' style={{ marginTop: "20px", textAlign: "center" }}>Almost Fall Vibes</h5>
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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/7ba15f6d_6642/womens-viscose-knit-pleated-skirt-bone-parsnip-gingham" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/6df5e739_12f2/womens-cotton-oversized-cocoon-sweater-parsnip" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/85ef7234_0c3c/womens-washable-silk-oversized-shirt-chanterelle" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/4e640143_a0a2/womens-linen-cottage-shirt-dress-black" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/10f364c8_6741/womens-cotton-phoebe-trouser-white" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/b2ab5f8e_0f24/womens-viscose-knit-pleated-dress-bone-parsnip-gingham" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/66e20e2c_cdfd/womens-way-high-drape-pant-seagrass" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/65d2ab75_3555/womens-washable-silk-ss-popover-top-black" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: "100%" }} src="https://media.everlane.com/images/c_fill,w_640,ar_250:312,q_auto,dpr_1.0,f_auto,fl_progressive:steep/i/7ba15f6d_6642/womens-viscose-knit-pleated-skirt-bone-parsnip-gingham" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Productsslider;
