/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home = ({ userState, setUserState, }) => {
  const isLoggedIn = userState.loggedIn;

  //create variables
  let message;
  let button;
  let logout;

  const handleLogout = () => {
    setUserState({
      forename: "",
      surname: "",
      translateTo: "",
      email: "",
      loggedIn: false,
      userID: "",
    });
  };
  //home page definition
  if (isLoggedIn) {
    message = <h1 className="titles">Welcome back, {userState.forename}!</h1>;
    button = <Link to="/flashcard"><button className="base-button" id="large-home-button" type="button">View My Flashcards!</button></Link>;
    logout = <Link to="/"><button className="base-button" id="large-logOut-button" type="button" onClick={handleLogout}>Log Out</button></Link>;
  } else {
    message = <h1 className='titles'>Welcome to LingoGuru!<div className='titles'>Please log in</div></h1>;
    button = <Link to="/login"><button className="base-button" type="button">Log in</button></Link>;
    logout = "";
  }

  return (
    <div id="HomePage">
      <div id="landing">
      {message}
      <br></br>
      <div id="home-buttons-container">
        {button}
        {logout}
      </div>
      </div>
      <div id="footer-container">
        <footer>
          <FontAwesomeIcon icon={ faCopyright } />
          <p id="copyright">Copyright</p>
        </footer>
      </div>
    </div>
  );
};

Home.propTypes = {
  forename: PropTypes.string,
  surname: PropTypes.string,
  translateTo: PropTypes.string,
  email: PropTypes.string,
  loggedIn: PropTypes.bool,
  userID: PropTypes.string,
};

export default Home;

