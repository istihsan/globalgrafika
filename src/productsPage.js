import React, { Component } from 'react';
import axios from 'axios';

class ProductsPage extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get('/api/products')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <strong>{product.name}</strong> - {product.description} - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
