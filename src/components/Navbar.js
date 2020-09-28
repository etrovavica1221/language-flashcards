import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
  const navbarState ={
    isOpen: true,
  }

  const [isOpen, setHamburger] = useState(navbarState.isHamburger)

  const toggleHamburger = () => {
    setHamburger(!isOpen)
  }

  return (
    <div className="navbar">
<<<<<<< HEAD
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
          <Link to="/flashcard">
            <li className="navbar-links-item">
            Flashcard
            </li>
        </Link> 
      </ul>
    </div>
=======
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
      <div id="bars-container"> 
        <button id="bars-icon" onClick={ toggleHamburger }>           
            <FontAwesomeIcon icon={ faBars } />
        </button>
      </div>
    </div>   
>>>>>>> master
  );
}

export default Navbar;

