import axios from "axios";
import { useEffect, useState } from "react"; 

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
    <div className="container mt-4">
      <div className="row">
        {data.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card product-card">
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                <img src={product.image1} alt={product.name} className="card-img-top product-img" />
              </a>
              <div className="card-body product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
                {product.special_offer && <p className="product-special-offer">{product.special_offer}</p>}
                {product.sustainability && <p className="product-sustainability">{product.sustainability}</p>}
                {product.sustainability_2 && <p className="product-sustainability">{product.sustainability_2}</p>}
                <button className="btn btn-primary">Quick Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productpage;
