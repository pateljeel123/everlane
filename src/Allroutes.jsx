import { Route, Routes } from 'react-router-dom';
import About from './Components/Navigation.jsx/About';
import Home from './Components/Home';
import Men from './Components/Navigation.jsx/Men';
import Women from './Components/Navigation.jsx/Women';
import Fetchdata from './Components/Fetchcomponents/Fetchdata'
import DescriptionPage from './Components/DescriptionPage';
import Mendatafetch from './Components/Fetchcomponents/Mendatafetch'
import MendescriptionPage from './Components/MendescriptionPage'



function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      <Route path="/description/:id" element={<DescriptionPage />} /> 
      <Route path="/productdata" element={<Fetchdata/>} />
      <Route path="/mendata" element={<Mendatafetch/>} />    
      <Route path="/mendescriptionPage/:id" element={<MendescriptionPage/>} />  



        
      </Routes>
    </div>
  );
}

export default Allroute;
