/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
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
      forename: "",
      surname: "",
      translateFrom: "",
      translateTo: "",
      email: "",
      loggedIn: false,
      userID: "",
    });
  };
  //home page definition
  if (isLoggedIn) {
  message = <h1 className="titles">Welcome back {userState.forename}!!</h1>;
    button = <Link className="base-button" to="/learn"><button type="button">View My Flashcards!</button></Link>;
    logout = <Link className="logOut" to="/"><button type="button" onClick={handleLogout}>Log Out</button></Link>;
    saveButton = <Link className="logOut" to="/"><button className="base-button" type="button" onClick={handleLogout}>Save to my Flashcards</button></Link>;
  } else {
    message = <h1 className='titles'>Welcome to LingoGuru!<div className='titles'>Please log in</div></h1>;
    button = <Link to="/login"><button className="base-button" type="button">Log in</button></Link>;
    logout = "";
    saveButton = "";
  }

  console.log(userState)

  return (
    
    <div id="HomePage">
      <div id="landing">
        {message}
        <br></br>
        {button}
        {logout}
      </div>
      <footer>
        <FontAwesomeIcon icon={ faCopyright } />
        <p id="copyright">Copyright</p>
      </footer>
    </div>
  );
};

export default Home;


/*translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
    console.log(res.text);
    //=> Ik spreek Nederlands!
    console.log(res.from.text.autoCorrected);
    //=> true
    console.log(res.from.text.value);
    //=> I [speak] Dutch!
    console.log(res.from.text.didYouMean);
    //=> false
}).catch(err => {
    console.error(err);
});
translate('I spea Dutch!', {from: 'en', to: 'nl'}).then(res => {
    console.log(res);
    console.log(res.text);
    //=> Ik spea Nederlands!
    console.log(res.from.text.autoCorrected);
    //=> false
    console.log(res.from.text.value);
    //=> I [speak] Dutch!
    console.log(res.from.text.didYouMean);
    //=> true
}).catch(err => {
    console.error(err);
});
const tunnel = require('tunnel');
translate('Ik spreek Engels', {to: 'en'}, {
    agent: tunnel.httpsOverHttp({
    proxy: {
      host: 'whateverhost',
      proxyAuth: 'user:pass',
      port: '8080',
      headers: {
        'User-Agent': 'Node'
      }
    }
  }
)}).then(res => {
    // do something
}).catch(err => {
    console.error(err);
});*/