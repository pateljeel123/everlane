import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function Productpage() {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="container  mt-4" >
      <div className="row">
        <Sidebar/>
        <div className="col-12 col-md-8 " style={{width:"80%",}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}} className="d-flex flex-wrap  justify-content-center">
            {data.map((product) => (
              <div key={product.id} className="product-card " style={{border:"none"}}>
                <img  className="Img1 " src={product.image1} alt="Product Image 1" />
                <img className="Img2" src={product.image2} alt="Product Image 1" />
                <div className="product-info">
                  <h6>{product.name}</h6>
                  <div className="price">₹ {product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage;