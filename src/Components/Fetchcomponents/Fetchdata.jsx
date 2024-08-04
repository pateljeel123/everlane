import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Fetchdata() {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    axios
      .get("http://localhost:3000/products")
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
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9">
          <div className="d-flex flex-wrap justify-content-center">
            {data.map((product) => (
              <div key={product.id} className="">
                <Link to={`/description/${product.id}`}>
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
