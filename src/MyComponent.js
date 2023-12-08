import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const MyComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRatingClick = (productId, clickedRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, rating: clickedRating } : product
      )
    );
  };

  const handleBuyClick = (productId) => {
    console.log(`Buy button clicked for product with ID ${productId}`);
  };

  const handleDeleteClick = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  const renderStars = (productId, currentRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingClick(productId, i)}
          style={{ cursor: 'pointer', color: i <= currentRating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <button
              className="delete-button"
              onClick={() => handleDeleteClick(product.id)}
              title="Delete"
            >
              X
            </button>
            <strong>{product.title}</strong>
            <br />
            <div className="rating-box">
              <span>Rating: {renderStars(product.id, product.rating)}</span>
            </div>
            <button onClick={() => handleBuyClick(product.id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;