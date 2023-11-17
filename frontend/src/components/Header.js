import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Header = () => {
  return (
    <header>
      <h1>Grocery Store Management</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/products">Product Management</Link></li>
          <li><Link to="/orders">Order Management</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
