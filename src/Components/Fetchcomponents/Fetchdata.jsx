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
    <div className="d-flex flex-wrap justify-content-center">
      {data.map((e) => (
        <div key={e.id} className="cardjeel">
          <img className="Img1" src={e.image1} alt="Product Image 1" />
          <img className="Img2" src={e.image2} alt="Product Image 2" />
        </div>
      ))}
    </div>
  );
}

export default Productpage;
