// Routeis.js

import { Routes, Route } from 'react-router-dom';
import About from './assets/Components/Navigation.jsx/About';
import Women from './assets/Components/Navigation.jsx/Women';
import Men from './assets/Components/Navigation.jsx/Men';
import Home from './assets/Components/Home';
import Fetchdata from './Components/Fetchcomponents/Fetchdata';

function Routeis() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/home" element={<Women />} />
      {/* <Route path="/productdata" element={<Fetchdata />} /> */}
      <Route path='/productdata' element={<Fetchdata/>}></Route>
    </Routes>
  );
}

export default Routeis;
