import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({userState}) {
  const navbarState ={
    isOpen: true,
  }

  const [isOpen, setHamburger] = useState(navbarState.isHamburger);

  const toggleHamburger = () => {
    setHamburger(!isOpen);
  }

  return (
    <div className="navbar">
      <Link id="logo-container" to="/">
        <img id="logo" src={require("../styles/logo.png")} alt="logo" />   
      </Link>
      {isOpen ? (
        <div className="navbar-openWrapper">
          <ul id="navbar-links">
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
      ) : (
        null
      )}
      {userState.loggedIn && 
        <div id="bars-container"> 
          <div id="menuToggle" onClick={ toggleHamburger }>
            <input type="checkbox" />
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
        </div>
      } 
    </div>  
  );
}

Navbar.propTypes = {
  isOpen: PropTypes.bool,
};

export default Navbar;

