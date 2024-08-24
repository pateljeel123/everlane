// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

function Rating() {
  return (
    <div>
      <div className='p-5'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
          <SwiperSlide>
            <div className='text-start' style={{ display: "flex", alignItems: "center",gap:"110px", width: "80%", marginLeft: "50px" }}>
              <div className=''>People Are Talking
                <p>★★★★★</p>
                <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
                <p>–Ecreiz, The Performance Chino</p>
              </div>
              <div>
              </div>
              <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/979e3c2d_63ca.jpg" alt="" />
            </div></SwiperSlide>
          <SwiperSlide><div className='text-start' style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <div className=''>People Are Talking
              <p>★★★★★</p>
              <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
              <p>–Ecreiz, The Performance Chino</p>
            </div>
            <div>
            </div>
            <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/c9a5ffc8_122e.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='text-start' style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <div className=''>People Are Talking
              <p>★★★★★</p>
              <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
              <p>–Ecreiz, The Performance Chino</p>
            </div>
            <div>
            </div>
            <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/6de88d52_2743.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='text-start' style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <div className=''>People Are Talking
              <p>★★★★★</p>
              <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
              <p>–Ecreiz, The Performance Chino</p>
            </div>
            <div>
            </div>
            <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/837370bf_103d.jpg" alt="" />
          </div></SwiperSlide>
          <SwiperSlide><div className='text-start' style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <div className=''>People Are Talking
              <p>★★★★★</p>
              <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
              <p>–Ecreiz, The Performance Chino</p>
            </div>
            <div>
            </div>
            <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/12d33fc3_f52a.jpg" alt="" />
          </div></SwiperSlide><SwiperSlide><div className='text-start' style={{ display: "flex", alignItems: "center", width: "80%" }}>
            <div className=''>People Are Talking
              <p>★★★★★</p>
              <h3>“Outstanding chino. Hands down best off the rack. Fit right out of the box. Great looking and comfortable.”</h3>
              <p>–Ecreiz, The Performance Chino</p>
            </div>
            <div>
            </div>
            <img style={{ width: "600px" }} src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/12d33fc3_f52a.jpg" alt="" />
          </div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Rating
