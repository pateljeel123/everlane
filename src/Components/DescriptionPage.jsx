import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

import Footer from './Footer'

function DescriptionPage() {
  const [page, setPage] = useState({});
  const { id } = useParams();

  const fetchData = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setPage(res.data);
      })
      .catch((err) => console.log(err));
  };


  

  useEffect(() => {
    fetchData();
  }, [id]);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the reviews!", error);
      });
  }, []);

  return (
    <>    <div className="description-page">
      <div className="images1">
        <img src={page.image1} alt="Product" className="main-image" />
        <img src={page.image2} alt="Product" className="main-image" />
      </div>
      <div className="product-details1">
        <h1 className="product-title">{page.title}</h1>
        <h2 className="product-name">{page.name}</h2>
        <h3 className="product-price">₹ {page.price}</h3>
        <button className="add-to-bag">ADD TO BAG</button>
        <div className="product-description">
          <p>{page.description}</p>
        </div>
        <div className="additional-details">
          <h4>Color: {page.color}</h4>
          <div className="color-options">
            {/* Map through color options */}
            {page.colors && page.colors.map((color, index) => (
              <div key={index} className="color-option" style={{ backgroundColor: color }}></div>
            ))}
          </div>
          <h4>Size: {page.size}</h4>
          <div className="size-options">
            {/* Map through size options */}
            {page.sizes && page.sizes.map((size, index) => (
              <div key={index} className="size-option">{size}</div>
            ))}
          </div>
          <p>Model is {page.modelHeight}, wearing a size {page.modelSize}</p>
        </div>
        <div className="shipping-info">
          <p><strong>Shipping Discount:</strong> Reduced rate express shipping on orders over ₹ 15000. <a href="/shipping-details">Shipping Details</a></p>
          <p><strong>Easy Returns:</strong> Return within 45 days of purchase. Duties & taxes are non-refundable. <a href="/returns-details">Returns Details</a></p>
        </div>
        <div>
        Your favorite pants now come in linen.
        The Linen Way-High® Drape Pant features pleats for a flattering drape, a wide leg, and floor-skimming length. Made of 100% linen so they’re breathable, light, and slightly sheer—the perfect alternative to denim for warmer days. Plus they're extra versatile so you can dress them up for weddings, or pair them with a tank for a more casual look. Designed with a non-stretch waistband. Try sizing up if you prefer more ease around the waist.
        </div>
        <div>
        <div className="reviews">
      <h3>Reviews</h3>
      <div className="review-summary">
        <h4>Overall</h4>
        <div className="overall-rating">
          <span>★★★★★</span>
          <span>4.3 Overall, average rating value is 4.3 of 5.</span>
        </div>
      </div>
      <div className="review-breakdown">
        
          <div   className="review-row">
            <span className="review-stars">★★★★★</span>
            <span className="review-count"> reviews with   stars. Select to filter reviews with   stars.</span>
          </div>
    
      </div>
    </div>
        </div>
      </div>
    </div>
    <div>
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="d-flex flex-column align-items-start">
            <h5 className="fw-bold">Ofelia</h5>
            <p className="text-muted mb-1">Verified</p>
            <p className="mb-1"><strong>Product:</strong> The Linen Way-High® Drape Pant</p>
            <p className="mb-1"><strong>Color:</strong> Cornstalk Chambray</p>
            <p className="mb-1"><strong>Size Purchased:</strong> 2</p>
            <p className="mb-1"><strong>Usual Size:</strong> 4</p>
            <p className="mb-1"><strong>Height:</strong> 5'6" - 5'8"</p>
            <p className="mb-1"><strong>Weight:</strong> 121 - 140 lb</p>
            <p className="mb-1"><strong>Body Type:</strong> Athletic</p>
          </div>
        </div>
        <div className="col-md-9 col-sm-12">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <div className="d-flex">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="me-1 text-warning">&#9733;</span>
                ))}
              </div>
              <span className="ms-2 text-muted">11 hours ago</span>
            </div>
            <h5 className="fw-bold">The best summer linen pants</h5>
            <p>
              I love these pants. I wore them all over Europe this summer and even on long plane rides and they are so comfortable and look very chic. Would definitely recommend.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <Footer/>
    </>
    
  );
}

export default DescriptionPage;
