 
import { Link } from 'react-router-dom';

function Everywhere() {
  return (
    <div className="container my-5 text-center">
      <div className="row  ">
        <div className="col-md-6">
          <div className=" ">
            <h2 className="h4">Everlane Everywhere</h2>
          </div>
          <img
            src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/779a8193_67e1.png"
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
  );
}

export default Everywhere;
