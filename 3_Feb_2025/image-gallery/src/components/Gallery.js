import React, { useState } from "react";
import "../styles.css";
import Filter from "./Filter";
import ImageCard from "./ImageCard";
import Modal from "./Modal";

const images = [
  { id: 1, src: "/images/nature1.jpg", category: "Nature" },
  { id: 2, src: "/images/tech1.jpg", category: "Tech" },
  { id: 3, src: "/images/art1.jpg", category: "Art" },
  { id: 4, src: "/images/nature2.jpg", category: "Nature" },
  { id: 5, src: "/images/tech2.jpg", category: "Tech" },
  { id: 6, src: "/images/art2.jpg", category: "Art" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="gallery-container">
      <Filter setSelectedCategory={setSelectedCategory} />
      <div className="gallery">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} image={image} onSelect={setSelectedImage} />
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;
