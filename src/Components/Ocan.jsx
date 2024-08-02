 
import 'bootstrap/dist/css/bootstrap.min.css';

function Ocan() {
  return (
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
  );
}

export default Ocan;
