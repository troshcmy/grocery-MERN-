import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3003/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductManagement;
