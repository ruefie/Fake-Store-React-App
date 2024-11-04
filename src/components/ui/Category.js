import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    if (category) {
      navigate(`/category/${category}`);
    } else {
      navigate(`/`); 
    }
  };

  return (
    <div className="filter-container">
    <div className="category-buttons">
      <button onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</button>
      <button onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</button>
      <button onClick={() => handleCategoryClick("jewelery")}>Jewelry</button>
      <button onClick={() => handleCategoryClick("electronics")}>Electronics</button>
      <button onClick={() => handleCategoryClick('')}>All Products</button>
    </div>
  </div>
  );  
};

export default Category;
