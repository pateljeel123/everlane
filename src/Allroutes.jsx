import { Route, Routes } from "react-router-dom";
import Men from "./assets/Components/Men";
import Women from "./assets/Components/Women";
import About from "./assets/Components/About";
import Home from "./assets/Components/HomepageComponents/Home";
// import Everywhere from "./assets/HomepageComponents/Everywhere";
import Everworld from "./assets/Components/Everworld";
// import Everywhere from "./assets/HomepageComponents/Everywhere";
import Productpage from"./assets/Components/PageComponents/Productpage"

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/men" element={<Men/>}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/everworld" element={<Everworld/>}></Route>
        <Route path="/Everworld Stories" element={<Home/>}></Route>
        <Route path="/productpage" element={<Productpage/>}></Route>
        


      </Routes>
    </div>
  );
}

export default Allroute;
