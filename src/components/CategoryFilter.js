import React from "react";
function CategoryFilter({ onSelectCategory, selectedCategory }) {
  const categories = ["All", "Code", "Food", "Money", "Misc"];

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
