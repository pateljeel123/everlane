import axios from "axios";
import   { useEffect, useState } from "react";

function Productpage() {
  const [data, setdata] = useState([]);

  const datafetch = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
         
            <>
            <img style={{height:"500px"}} src={e.image1} alt="" />
            </>
       
        );
      })}
    </div>
  );
}

export default Productpage;
