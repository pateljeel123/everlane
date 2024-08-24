import { Routes, Route } from 'react-router-dom';
import About from './assets/Components/Navigation.jsx/About';
import Women from './assets/Components/Navigation.jsx/Women';
import Men from './assets/Components/Navigation.jsx/Men';
import Home from './assets/Components/Home';
import Fetchdata from './Components/Fetchcomponents/Fetchdata';
import DescriptionPage from './Components/DescriptionPage'; 
import Productpage from './Components/Productpage';  
import MendescriptionPage from './Components/MendescriptionPage'
import Search from './Components/Search';
function Routeis() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/description/:id" element={<DescriptionPage />} /> 
      <Route path="/productdata" element={<Fetchdata />} />
      <Route path="/productpage" element={<Productpage />} />  
      <Route path="/mendescriptionPage:id" element={<MendescriptionPage/>} />  
      <Route path="/search" element={<Search/>} />  
      
    </Routes>
  );
}

export default Routeis;