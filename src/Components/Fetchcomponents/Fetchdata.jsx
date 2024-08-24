import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Collapse } from 'react-bootstrap';

function Fetchdata() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [openFilters, setOpenFilters] = useState(false); // State for collapsible filters

  // Function to fetch data from API
  const dataFetch = () => {
    const params = new URLSearchParams();

    // Append filters to params if selected
    if (selectedCategories.length > 0) {
      params.append('categories', selectedCategories.join(','));
    }
    if (selectedColors.length > 0) {
      params.append('colors', selectedColors.join(','));
    }
    if (selectedSizes.length > 0) {
      params.append('sizes', selectedSizes.join(','));
    }

    // Fetch data from the API with query parameters
    axios
      .get(`http://localhost:3000/products?${params.toString()}`)
      .then((res) => {
        console.log("Fetched data:", res.data); // Log fetched data
        // Apply sorting to fetched data
        let sortedData = res.data;
        if (sortOrder === 'priceAsc') {
          sortedData = sortedData.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'priceDesc') {
          sortedData = sortedData.sort((a, b) => b.price - a.price);
        } else if (sortOrder === 'nameAsc') {
          sortedData = sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'nameDesc') {
          sortedData = sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
        setData(sortedData); // Set sorted and filtered data
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  // Fetch data whenever sortOrder or any filters change
  useEffect(() => {
    dataFetch();
  }, [sortOrder, selectedCategories, selectedColors, selectedSizes]);

  // Handle category checkbox change
  const handleCategoryChange = (e) => {
    const category = e.target.nextSibling.textContent.trim();
    setSelectedCategories(prevCategories => 
      e.target.checked 
        ? [...prevCategories, category] 
        : prevCategories.filter(cat => cat !== category)
    );
  };

  // Handle color checkbox change
  const handleColorChange = (e) => {
    const color = e.target.nextSibling.textContent.trim();
    setSelectedColors(prevColors => 
      e.target.checked 
        ? [...prevColors, color] 
        : prevColors.filter(col => col !== color)
    );
  };

  // Handle size checkbox change
  const handleSizeChange = (e) => {
    const size = e.target.nextSibling.textContent.trim();
    setSelectedSizes(prevSizes => 
      e.target.checked 
        ? [...prevSizes, size] 
        : prevSizes.filter(sz => sz !== size)
    );
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="container-fluid mt-4 pt-5 mt-5">
      <div className="row" style={{ marginTop: "2%" }}>
        <div className="col-12 col-md-3">
          {/* Filter button for small devices */}
          <Button 
            className="d-md-none w-100 mb-2" 
            variant="light" 
            onClick={() => setOpenFilters(!openFilters)}
            aria-controls="filters-collapse"
            aria-expanded={openFilters}
          >
            Filters
          </Button>

          {/* Collapsible filters section */}
          <Collapse in={openFilters} className="d-md-block">
            <div id="filters-collapse" className="sidebar" style={{ width: "260px" }}>
              {/* Category section */}
              <div className="sidebar-section">
                <h6>Category</h6>
                <ul>
                  <li><input type="checkbox" onChange={handleCategoryChange} /> Shirts</li>
                  <li><input type="checkbox" onChange={handleCategoryChange} /> Polo</li>
                  <li><input type="checkbox" onChange={handleCategoryChange} /> Sweatpants</li>
                  <li><input type="checkbox" onChange={handleCategoryChange} /> Hoodies</li>
                  <li><input type="checkbox" onChange={handleCategoryChange} /> Sweatshirts</li>
                </ul>
              </div>

              {/* Color section */}
              <div className="sidebar-section">
                <h6>Color</h6>
                <ul className="color-list">
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box black"></span> Black</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box blue"></span> Blue</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box brown"></span> Brown</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box green"></span> Green</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box grey"></span> Grey</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box multicolor"></span> Multicolor</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box tan"></span> Tan</li>
                  <li className="color-option"><input type="checkbox" onChange={handleColorChange} /> <span className="color-box white"></span> White</li>
                </ul>
              </div>

              {/* Size section */}
              <div className="sidebar-section">
                <h6>Size</h6>
                <ul className="size-list">
                  <li><input type="checkbox" onChange={handleSizeChange} /> XXS</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> XS</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> S</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> M</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> L</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> XL</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> XXL</li>
                  <li><input type="checkbox" onChange={handleSizeChange} /> XXXL</li>
                </ul>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="col-12 col-md-9">
          <p>
            <Link style={{ textDecoration: "none", color: "black" }} to={'/'}>Home </Link> / 
            <Link style={{ textDecoration: "none", color: "black" }} to={'/women'}> Women </Link>
          </p>
          <h1 style={{ fontSize: "30px" }}>Women's Best Selling Clothing & Apparel</h1>
          
          <div className="mb-3">
            <label htmlFor="sortOptions" className="form-label">Sort By:</label>
            <select
              id="sortOptions"
              className="form-select"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="">Select...</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A to Z</option>
              <option value="nameDesc">Name: Z to A</option>
            </select>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            {data.map((product) => (
              <div key={product.id} className="">
                <Link to={`/description/${product.id}`}>
                  <div className="cardjeel">
                    <img src={product.image1} alt={product.name} className="Img1" />
                    <img src={product.image2} alt={product.name} className="Img2" />
                  </div>
                </Link>
                <div className="product-details">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
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
