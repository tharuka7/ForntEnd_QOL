// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/prediction" className="navbar-link">Quality of Life Prediction</Link></li>
        <li className="navbar-item"><Link to="/about" className="navbar-link">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
