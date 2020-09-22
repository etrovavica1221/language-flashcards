/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const translateState = {
  value: '',
};

const Home = ({ userState, setUserState }) => {
  const [Value, setCurrValue] = useState(translateState.value);
  const isLoggedIn = userState.loggedIn;
  
  //create variables
  let message;
  let button;
  let logout;
  let saveButton;

  //update the translation automatically
  const handleChange = (e) => {
    setCurrValue({
      ...Value,
      value: e.target.value,
    });
  };

  const handleLogout = () => {
    setUserState({
      userName: "",
      translateFrom: "",
      translateTo: "",
      loggedIn: false,
    });
  };
  //home page definition
  if (isLoggedIn) {
    message = <h1 className="titles">Welcome back!!</h1>;
    button = <Link className="base-button" to="/learn"><button type="button">View My Flashcards!</button></Link>;
    logout = <Link className="logOut" to="/"><button type="button" onClick={handleLogout}>Log Out</button></Link>;
    saveButton = <Link className="logOut" to="/"><button className="base-button" type="button" onClick={handleLogout}>Save to my Flashcards</button></Link>;
  } else {
    message = <h1 className='titles'>Welcome to translator app!<div className='titles'>Please log in</div></h1>;
    button = <Link to="/login"><button className="base-button" type="button">Log in</button></Link>;
    logout = "";
    saveButton = "";
  }

  return (
    <div id="HomePage">
      <div id="landing">
        {message}
        {button}
        {logout}
      </div>
      <div id="translation-form-container">
        <h1 className="titles">Translate your text and make your own flashcards</h1>
          <form id="translation-form" action="submit">
            <textarea type="text" placeholder="Enter text to translate..." required name="textInput" onChange={handleChange} />
            <textarea value={Value.value} type="text" placeholder="Translation..." required name="textOutput" />
          </form>
        {saveButton}
      </div>
    </div>
  );
};

export default Home;
