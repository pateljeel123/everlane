import Category from "./Category"
import Discount from "./Discount"
import Everywhere from "./Everywhere"
import Navbar from "./Navbar"
import Ocan from "./Ocan"
import Productsslider from "./Productsslider"
import Slider from "./Slider"

function Home() {
  return (
    <div>
      <Navbar/>
      
         
      <Slider/>
      <Productsslider/>
      <Category/>
      <Discount/>
      <Ocan/>
      <Everywhere/>
    </div>
  )
}

export default Home
