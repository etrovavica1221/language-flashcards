import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <img id="logo" src={require("../styles/logo.png")} alt="logo" width="200" height="45" />
      <ul className="navbar-links">
        <Link to="/">
          <li className="navbar-links-item">
            Home
          </li>
        </Link>
        <Link to="/profile">
          <li className="navbar-links-item">
            Profile
          </li>
        </Link>
        <Link to="/learn">
          <li className="navbar-links-item">
            Learn
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
