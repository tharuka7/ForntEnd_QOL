import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <span>Quality of Life Among Asian Americans in City of Austin</span>
      </div>
      <nav className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/prediction" className="navbar-link">Quality of Life Prediction</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Data Set</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
