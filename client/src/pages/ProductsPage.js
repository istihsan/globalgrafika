import React, { Component } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios.get('http://localhost:3000/products');
        console.log(data, '<<<<< FETCH EFFECT');
      } catch (error) {
        console.log('error', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> - {product.description} - $
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
