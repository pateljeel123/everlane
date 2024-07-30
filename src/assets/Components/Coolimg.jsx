
function Coolimg() {
    return (
        <>
            <div className=' container-fluid p-5' >
                <div className="row p-3 pt-0">
                    <div className='col-4 p-1'>
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/72f8ba2d_64e2.png)", height: "740px", backgroundSize: "cover" }} >
                            <h1  className='color1'>New Arrivals</h1>
                            <button  className='builder-block-btn'>shop The latest</button>
                        </div>
                    </div>
                    <div className="col-4 p-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/23f2db31_321d.jpg)", height: "740px", backgroundSize: "cover" }} >
                            <h1 className='color1'>Crisp & Cool</h1>
                            <button  className='builder-block-btn'>SHOP LINEN</button>
                        </div>
                    </div>
                    <div className="col-4 p-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: "url(https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/24dfdf30_655c.png)", height: "740px", backgroundSize: "cover" }} >
                            <h1  className='color1'>Best-Selling Tees</h1>
                           <div style={{display:"flex",gap:"5px"}}>
                           <button  className='builder-block-btn'>SHOP NOW</button>
                           <button className='builder-block-btn'>THE TEE GUIDE</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div style={{display:"flex"}}>
        //   <div>
        //   <img style={{display:"flex",position:"relative"}} className='imagecool' src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/72f8ba2d_64e2.png" alt="" /><h1 style={{position:"absolute"}}>New Arrivals
        //   New Arrivals</h1>
        //   </div>
        //   <div>
        //   <img style={{display:"flex"}} className='imagecool' src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/23f2db31_321d.jpg" alt="" />
        //   </div><div>
        //   <img style={{display:"flex"}} className='imagecool' src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/24dfdf30_655c.png" alt="" />
        //   </div>


        // </div>
    )
}


export default Coolimg


