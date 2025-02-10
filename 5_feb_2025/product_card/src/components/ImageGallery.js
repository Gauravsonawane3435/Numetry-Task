import React, { useState } from "react";
import "../styles/ImageGallery.css"; // Corrected import

const images = [
  { id: 1, category: "Nature", src: "/images/nature1.jpg" },
  { id: 2, category: "Technology", src: "/images/tech1.jpg" },
  { id: 3, category: "Art", src: "/images/art1.jpg" },
  { id: 4, category: "Nature", src: "/images/nature2.jpg" },
  { id: 5, category: "Technology", src: "/images/tech2.jpg" },
];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="buttons">
        {["All", "Nature", "Technology", "Art"].map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="gallery">
        {filteredImages.map((img) => (
          <img key={img.id} src={img.src} alt={img.category} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
