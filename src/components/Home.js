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
    button = <Link className="homeButton" to="/learn"><button type="button">get started!</button></Link>;
    logout = <Link className="logOut" to="/"><button type="button" onClick={handleLogout}>Log Out</button></Link>;
  } else {
    message = <h1>Welcome to translator app, please log in</h1>;
    button = <Link className="homeButton" to="/login"><button type="button">Log in</button></Link>;
    logout = "";
  }

  return (
    <div className="HomePage">
      {message}
      {button}
      {logout}
    </div>
  );
};

export default Home;
