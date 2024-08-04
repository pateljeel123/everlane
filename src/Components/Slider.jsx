// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Import autoplay styles

// Import Bootstrap styles (if not already included in your project)
import 'bootstrap/dist/css/bootstrap.min.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

function Men() {
  return (
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
  )
}

export default Men;
