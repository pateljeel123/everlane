import { BrowserRouter as  Routes, Route } from 'react-router-dom';
// import Home from './assets/Components/Home'
import Women from './assets/Components/NavbarComponents/Women'
// import Everywhere from './assets/Components/Everywhere'
import Men from'./assets/Components/NavbarComponents/Men'
import About from'./assets/Components/NavbarComponents/About'

function Routeis() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
      </Routes>
    </div>
  )
}

export default Routeis;
