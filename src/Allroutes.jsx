import { Route, Routes } from "react-router-dom";
import  About from'./Components/Navigation.jsx/About'
import Home from'./Components/Home'
import Men from'./Components/Navigation.jsx/Men'
import Women from'./Components/Navigation.jsx/Women'


function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/everworld" element={<Everworld/>}></Route>
        <Route path="/Everworld Stories" element={<Home/>}></Route>
        <Route path="/productpage" element={<Productpage/>}></Route> */}
        


      </Routes>
    </div>
  );
}

export default Allroute;
