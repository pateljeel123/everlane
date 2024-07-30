import React from 'react';

function Category() {
  const categories = [
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/14a83ca4_7188.jpg", label: "DRESSES" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/3a8302ab_c693.jpg", label: "TOPS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/f4fe8b71_0a7c.jpg", label: "JEANS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/1706e9c1_98c8.jpg", label: "PANTS" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/72dbaaf7_fbbb.jpg", label: "TEES" },
    { src: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1900/v1/i/59f6156a_4b9a.jpg", label: "SHOES & ACCESSORIES" }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Shop by Category</h1>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 justify-content-center">
        {categories.map((item, index) => (
          <div className="col text-center" key={index}>
            <img 
              className="img-fluid" 
              style={{ height: "350px", objectFit: "cover" }} 
              src={item.src} 
              alt={item.label} 
            />
            <h5 className="mt-2">{item.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
