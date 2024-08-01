// import axios from "axios";
// import  { useEffect, useState } from "react";

// function Productpage() {
//   const [data, setdata] = useState([]);

//   const datafetch = () => {
//     axios
//       .get("http://localhost:3000/products")
//       .then((res) => {
//         setdata(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     datafetch();
//   }, []);

//   return (
//     <div>
//       {data.map((e) => {
//         return (
         
//            <>
//            <div className="cardjeel">
//             <img  className='Img1' style={{height:"500px"}} src={e.image1} alt="" />
//             <img  className='Img2' style={{height:"500px"}} src={e.image2} alt="" />
//             </div>
//            </>
       
//         );
//       })}
//     </div>
//   );
// }

// export default Productpage;