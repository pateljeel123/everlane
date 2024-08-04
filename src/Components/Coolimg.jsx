import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Coolimg() {
  return (
    <>
      <div className='container-fluid p-5'>
        <div className="row p-3 pt-0">
          <div className='col-12 col-md-4 p-1'>
            <div className="d-flex flex-column justify-content-center align-items-center text-center bg-cover" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/72f8ba2d_64e2.png)", height: "100%", backgroundSize: "cover", minHeight: "700px" }} >
              <h1 className='color1'>New Arrivals</h1>
              <button className='builder-block-btn'>Shop The Latest</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-1">
            <div className="d-flex flex-column justify-content-center align-items-center text-center bg-cover" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/23f2db31_321d.jpg)", height: "100%", backgroundSize: "cover", minHeight: "700px" }} >
              <h1 className='color1'>Crisp & Cool</h1>
              <button className='builder-block-btn'>Shop Linen</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-1">
            <div className="d-flex flex-column justify-content-center align-items-center text-center bg-cover" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/24dfdf30_655c.png)", height: "100%", backgroundSize: "cover", minHeight: "700px" }} >
              <h1 className='color1'>Best-Selling Tees</h1>
              <div style={{ display: "flex", gap: "5px",  flexWrap: "wrap", justifyContent: "center" }}>
                <button className='builder-block-btn'>Shop Now</button>
                <button className='builder-block-btn'>The Tee Guide</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coolimg;
