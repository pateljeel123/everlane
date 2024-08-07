import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';
import Footer from '../Footer'; 

function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLoadedData = () => {
      setIsLoaded(true);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="row justify-content-center my-5">
        <div className="col-12 text-center t-shrt">
          <h1 className="display-4 t-shrt-h1 responsive-text">We believe<br />we can all make<br />a difference.</h1>
          <p className="lead t-shrt-p responsive-text">Our way: Exceptional quality.<br />Ethical factories. Radical Transparency.</p>
        </div>
      </div>

      <div className="row justify-content-center my-5">
        <div className="text-center col-12 col-md-8 p-0 m-0">
          <h1 className="responsive-text">
            At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
          </h1>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#E6DED8" }}>
        <div className="row align-items-center">
          <div className="col-md-6 p-0">
            <img
              src="https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/4a5e24a2_85d5.jpg"
              alt="Our ethical approach"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 text-center my-5 my-md-0">
            <p className="responsive-text">Our ethical approach.</p>
            <h1 className="responsive-text">Our ethical approach.</h1>
            <p className="responsive-text">We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid video-container" style={{ border: "none" }}>
        <div className="row justify-content-center">
          <div className={isLoaded ? 'video-visible col-12' : 'video-hidden col-12'}>
            <video
              ref={videoRef}
              className="video-element"
              src="https://res.cloudinary.com/everlane/video/upload/c_scale,q_auto,w_1800/v1560384023/Factory_Wide_pmvovx.mp4"
              autoPlay
              controls
              loop
              muted
            />
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#E6DED8" }}>
        <div className="row align-items-center p-0">
          <div className="col-md-6 text-center my-5 my-md-0">
            <p className="responsive-text">Our ethical approach.</p>
            <h1 className="responsive-text">Our ethical approach.</h1>
            <p className="responsive-text">We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
          </div>
          <div className="col-md-6 p-0">
            <img
              src="https://media.everlane.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto,w_auto/c_limit,w_1600/v1/i/06a23e68_6bda.jpg"
              alt="Our ethical approach"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 p-0">
            <img
              src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/4f12c031_afae.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p className="responsive-text">Our Prices</p>
            <h1 className="responsive-text">Radically Transparent.</h1>
            <p className="responsive-text" style={{ fontSize: "0.9em" }}>We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
