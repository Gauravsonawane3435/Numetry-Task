import React from "react";
import "../styles.css";

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={image.src} alt="Large View" />
      </div>
    </div>
  );
};

export default Modal;
