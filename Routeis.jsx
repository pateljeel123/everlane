import { Routes, Route } from 'react-router-dom';
import About from './assets/Components/Navigation.jsx/About';
import Women from './assets/Components/Navigation.jsx/Women';
import Men from './assets/Components/Navigation.jsx/Men';
  
function Routeis() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
    </Routes>
  );
}

export default Routeis;
