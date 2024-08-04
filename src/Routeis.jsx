import { Routes, Route } from 'react-router-dom';
import About from './assets/Components/Navigation.jsx/About';
import Women from './assets/Components/Navigation.jsx/Women';
import Men from './assets/Components/Navigation.jsx/Men';
import Home from './assets/Components/Home';
import Fetchdata from './Components/Fetchcomponents/Fetchdata';
import DescriptionPage from './Components/DescriptionPage'; 
import Productpage from './Components/Productpage'; // Ensure this import matches your file structure

function Routeis() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/description/:id" element={<DescriptionPage />} /> 
      <Route path="/productdata" element={<Fetchdata />} />
      <Route path="/productpage" element={<Productpage />} /> {/* Add this route if not already existing */}
    </Routes>
  );
}

export default Routeis;
