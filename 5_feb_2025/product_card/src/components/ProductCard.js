import React from "react";
import "../styles/ProductCard.css"; // Corrected import

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="/images/product.jpg" alt="Product" />
      </div>
      <div className="product-details">
        <h3>Cool Product</h3>
        <p>$49.99</p>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
