  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import Footer from "./Footer";
  import { useCart } from "./CartContext";
  import { Carousel } from "react-bootstrap";

  function DescriptionPage() {
    const [page, setPage] = useState({});
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => {
          setPage(res.data);
        })
        .catch((err) => console.error(err));
    }, [id]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/reviews")
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the reviews!", error);
        });
    }, []);

    const handleAddToBag = () => {
      addToCart(page);
      alert("Product added to bag");
    };

    return (
      <>
        <div
          className="description-page d-flex flex-column flex-lg-row"
          style={{ marginTop: "80px" }}
        >
          <div className="images1 w-auto d-none d-lg-block">
            {page.image1 && (
              <img src={page.image1} alt="Product" className="main-image" />
            )}
            {page.image2 && (
              <img src={page.image2} alt="Product" className="main-image" />
            )}
          </div>
          
          {/* This will only show on small screens */}
          <div className="images-carousel d-lg-none">
            <Carousel>
              {page.image1 && (
                <Carousel.Item>
                  <img
                    src={page.image1}
                    alt="Product"
                    className="d-block w-100"
                  />
                </Carousel.Item>
              )}
              {page.image2 && (
                <Carousel.Item>
                  <img
                    src={page.image2}
                    alt="Product"
                    className="d-block w-100"
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </div>

          <div className="product-details1">
            <h1 className="product-title">{page.title}</h1>
            <div style={{ display: "flex" }} className="pt-2">
              <h2 className="product-name" style={{ paddingRight: "210px" }}>
                {page.name}
              </h2>
              <h3 className="product-price"> {page.price}</h3>
            </div>
            <div>
              ★★★★★<p>4.3/5 Rating (87 Reviews)</p>
            </div>
            <button className="add-to-bag" onClick={handleAddToBag}>
              ADD TO BAG
            </button>
            <div className="product-description">
              <p>{page.description}</p>
            </div>
            <div className="additional-details">
              <h4>Color: {page.color}</h4>
              <div className="color-options">
                {page.colors &&
                  page.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-option"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
              </div>
              <h4>Size: {page.size}</h4>
              <div className="size-options">
                {page.sizes &&
                  page.sizes.map((size, index) => (
                    <div key={index} className="size-option">
                      {size}
                    </div>
                  ))}
              </div>
              <p>
                Model is {page.modelHeight}, wearing a size {page.modelSize}
              </p>
            </div>
            <div className="shipping-info">
              <p>
                <strong>Shipping Discount:</strong> Reduced rate express shipping
                on orders over ₹ 15000.{" "}
                <a href="/shipping-details">Shipping Details</a>
              </p>
              <p>
                <strong>Easy Returns:</strong> Return within 45 days of purchase.
                Duties & taxes are non-refundable.{" "}
                <a href="/returns-details">Returns Details</a>
              </p>
            </div>
            <div>
              <p>
                Your favorite pants now come in linen. The Linen Way-High® Drape
                Pant features pleats for a flattering drape, a wide leg, and
                floor-skimming length. Made of 100% linen so they’re breathable,
                light, and slightly sheer—the perfect alternative to denim for
                warmer days. Plus they're extra versatile so you can dress them up
                for weddings, or pair them with a tank for a more casual look.
                Designed with a non-stretch waistband. Try sizing up if you prefer
                more ease around the waist.
              </p>
            </div>
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
                {reviews.map((review, index) => (
                  <div key={index} className="review-row"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          {reviews.map((review, index) => (
            <div key={index} className="row mb-3">
              <div className="col-md-3 col-sm-12">
                <div className="d-flex flex-column align-items-start">
                  <h5 className="fw-bold">{review.reviewer}</h5>
                  <p className="text-muted mb-1">Verified</p>
                  <p className="mb-1">
                    <strong>Product:</strong> The Linen Way-High® Drape Pant
                  </p>
                  <p className="mb-1">
                    <strong>Color:</strong> Cornstalk Chambray
                  </p>
                  <p className="mb-1">
                    <strong>Size Purchased:</strong> 2
                  </p>
                  <p className="mb-1">
                    <strong>Usual Size:</strong> 4
                  </p>
                  <p className="mb-1">
                    <strong>Height:</strong> 5'6" - 5'8"
                  </p>
                  <p className="mb-1">
                    <strong>Weight:</strong> 121 - 140 lb
                  </p>
                  <p className="mb-1">
                    <strong>Body Type:</strong> Athletic
                  </p>
                </div>
              </div>
              <div className="col-md-9 col-sm-12">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <div className="d-flex">
                      <span className="review-stars">
                        {"★".repeat(review.rating)}
                      </span>
                    </div>
                    <span className="ms-2 text-muted">{review.date}</span>
                  </div>
                  <p>{review.comment}</p>
                  <p>
                    <a
                      href={review.product_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Product
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }

  export default DescriptionPage;
