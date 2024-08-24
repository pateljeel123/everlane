import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Collapse } from 'react-bootstrap'; // Import Bootstrap components

function Fetchdata() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [openFilters, setOpenFilters] = useState(false); // State for dropdown

  // Fetch data and categories/colors
  const dataFetch = async () => {
    try {
      const res = await axios.get("http://localhost:3000/mendata");
      console.log("Fetched data:", res.data);
      setData(res.data);
      // Extract unique categories and colors from the data
      const uniqueCategories = [...new Set(res.data.map(item => item.category))];
      const uniqueColors = [...new Set(res.data.map(item => item.color))];
      setCategories(uniqueCategories);
      setColors(uniqueColors);
      setFilteredData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Apply filters to the data
  useEffect(() => {
    const filtered = data.filter(item =>
      (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
      (selectedColors.length === 0 || selectedColors.includes(item.color))
    );
    setFilteredData(filtered);
  }, [selectedCategories, selectedColors, data]);

  useEffect(() => {
    dataFetch();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="container-fluid mt-4 pt-5 mt-5">
      <div className="row" style={{ marginTop: "2%" }}>
        <div className="col-12 col-md-3">
          {/* Filter button for small devices */}
          <Button
            className="d-md-none mb-3"
            onClick={() => setOpenFilters(!openFilters)}
            aria-controls="filter-collapse"
            aria-expanded={openFilters}
          >
            Filter
          </Button>
          
          {/* Sidebar with collapsible filters for small devices */}
          <div className={`sidebar ${openFilters ? 'd-block' : 'd-none d-md-block'}`} id="filter-collapse">
            <div className="sidebar-section">
              <h6>Category</h6>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    /> {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-section">
              <h6>Color</h6>
              <ul className="color-list">
                {colors.map((color) => (
                  <li key={color} className="color-option">
                    <span className={`color-box ${color.toLowerCase()}`}></span>
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-section">
              <h6>Size</h6>
              <ul className="size-list">
                <li><input type="checkbox" /> XXS</li>
                <li><input type="checkbox" /> XS</li>
                <li><input type="checkbox" /> S</li>
                <li><input type="checkbox" /> M</li>
                <li><input type="checkbox" /> L</li>
                <li><input type="checkbox" /> XL</li>
                <li><input type="checkbox" /> XXL</li>
                <li><input type="checkbox" /> XXXL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <p>
            <Link
              style={{ textDecoration: "none", color: "black", paddingLeft: "70px" }}
              to={"/men"}
            >
              Home{" "}
            </Link>{" "}
            /
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/men"}
            >
              {" "}
              men{" "}
            </Link>
          </p>
          <h1 style={{ fontSize: "120%", paddingLeft: "70px" }}>
            Men's Best Selling Clothing & Apparel
          </h1>
          <div className="d-flex flex-wrap justify-content-center">
            {filteredData.map((product) => (
              <div key={product.id} className="p-2" style={{width: "100%", maxWidth: "300px"}}>
                <Link to={`/MendescriptionPage/${product.id}`}>
                  <div className="cardjeel">
                    <img style={{width:"100%"}}
                      src={product.image1}
                      alt={product.name}
                      className="Img1"
                    />
                    <img
                      src={product.image2}
                      alt={product.name}
                      className="Img2"
                    />
                  </div>
                </Link>
                <div className="product-details px-3  d-flex justify-content-between">
                  <p >{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetchdata;
