/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({userState, setUserState}) => {
  const isLoggedIn = userState.loggedIn;

  const handleLogout = () => {
    setUserState({
      userName: "",
      translateFrom: "",
      translateTo: "",
      loggedIn: false,
    });
  };

  let message;
  let button;
  let logout;
  if (isLoggedIn) {
    message = <h1>Welcome back!!</h1>;
    button = <Link className="base-button" to="/learn"><button className="home-button" type="button">get started!</button></Link>;
    logout = <Link className="logOut" to="/"><button type="button" onClick={handleLogout}>Log Out</button></Link>;
  } else {
    message = <h1 class='welcome-msg'>Welcome to translator app!<div class='welcome-msg'>Please log in</div></h1>;
    button = <Link to="/login"><button className="base-button" type="button">Log in</button></Link>;
    logout = "";
  }

  return (
    <div className="HomePage">
      <div id="landing">
        {message}
        {button}
        {logout}
      </div>
    </div>
  );
};

export default Home;
