import React from "react";

const ImageCard = ({ image, onSelect }) => {
  return (
    <div className="image-card" onClick={() => onSelect(image)}>
      <img src={image.src} alt="Gallery" />
    </div>
  );
};

export default ImageCard;
