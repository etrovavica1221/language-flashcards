import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({userState, setUserState}) => {
  const isLoggedIn = userState.loggedIn;
  let message;
  let button;
  if (isLoggedIn) {
    message = <h1>Welcome back!!</h1>;
    button = <Link className="homeButton" to="/learn"><button type="button">get started!</button></Link>;
  } else {
    message = <h1>Welcome to translator app, please log in</h1>;
    button = <Link className="homeButton" to="/login"><button type="button">Log in</button></Link>;
  }

  return (
    <div className="HomePage">
      {message}
      {button}
    </div>
  );
};

export default Home;
