import React from "react";

const Filter = ({ setSelectedCategory }) => {
  return (
    <div className="filter-container">
      <button onClick={() => setSelectedCategory("All")}>All</button>
      <button onClick={() => setSelectedCategory("Nature")}>Nature</button>
      <button onClick={() => setSelectedCategory("Tech")}>Tech</button>
      <button onClick={() => setSelectedCategory("Art")}>Art</button>
    </div>
  );
};

export default Filter;
