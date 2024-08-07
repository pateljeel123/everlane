import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Fetchdata() {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    axios
      .get(" http://localhost:3000/mendata")
      .then((res) => {
        console.log("Fetched data:", res.data); // Log fetched data
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="container-fluid mt-4 pt-5 mt-5"  >
      <div className="row" style={{marginTop:"2%"}}>
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9">
        <p><Link  style={{textDecoration:"none",color:"black"}} to={'/men'}>Home </Link> /<Link style={{textDecoration:"none",color:"black"}} to={'/men'}> men </Link></p>
        <h1 style={{fontSize:"30px"}}>Women's Best Selling Clothing & Apparel</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {data.map((product) => (
              <div key={product.id} className="">
                <Link to={`/MendescriptionPage/${product.id}`}>
                  <div className="cardjeel">
                    <img src={product.image1} alt={product.name} className="Img1" />
                    <img src={product.image2} alt={product.name} className="Img2" />
                  </div>
                </Link>
                <div className="product-details">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetchdata;
