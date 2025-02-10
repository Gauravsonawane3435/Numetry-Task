import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import ImageGallery from "./components/ImageGallery";
import ProductCard from "./components/ProductCard";
import "./styles/global.css"; // Global styles

function App() {
  return (
    <div className="App">
      <h1>React Components Showcase</h1>
      <div className="section">
        <ProductCard />
      </div>
      <div className="section">
        <CountdownTimer />
      </div>
      <div className="section">
        <ImageGallery />
      </div>
    </div>
  );
}

export default App;
