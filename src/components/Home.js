/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState, Component } from 'react';
import { setRawCookie } from 'react-cookies';
import { Link } from 'react-router-dom';
import cookies from "react-cookies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import '../styles/Home.css';

import { googleTranslate } from '../utils/googleTranslate';

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
  message = <h1 className="titles">Welcome back, {userState.forename}!</h1>;
    button = <Link className="base-button" to="/learn"><button type="button">View My Flashcards!</button></Link>;
    logout = <Link to="/"><button className="logOut" id="large-logOut-button" type="button" onClick={handleLogout}>Log Out</button></Link>;
    saveButton = <Link to="/"><button className="base-button" type="button" onClick={handleLogout}>Save to my Flashcards</button></Link>;
  } else {
    message = <h1 className='titles'>Welcome to LingoGuru!<div className='titles'>Please log in</div></h1>;
    button = <Link to="/login"><button className="base-button" type="button">Log in</button></Link>;
    logout = "";
    saveButton = "";
  }

  // class App extends Component {
  //   state = {
  //     languageCodes: [],
  //     language: cookie.load("language") ? cookie.load("language") : "en",
  //     question: cookie.load("question")
  //       ? cookie.load("question")
  //       : "What language do you prefer to read with?"
  //   };
  
  //   componentDidMount() {
  //     // load all of the language options from Google Translate to your app state
  
  //     googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
  //       getLanguageCodes(languageCodes); // use a callback function to setState
  //     });
  
  //     const getLanguageCodes = languageCodes => {
  //       this.setState({ languageCodes });
  //     };
  //   }
  
    // render() {
    //   const { languageCodes, language, question } = this.state;
  
    //   return (
    //     <div style={this.divStyle}>
    //       <p>{question}</p>
  
    //       {/* iterate through language options to create a select box */}
    //       <select
    //         className="select-language"
    //         value={language}
    //         onChange={e => this.changeHandler(e.target.value)}
    //       >
    //         {languageCodes.map(lang => (
    //           <option key={lang.language} value={lang.language}>
    //             {lang.name}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //   );
    // }
  
  //   changeHandler = language => {
  //     let { question } = this.state;
  //     let cookieLanguage = cookie.load("language");
  //     let transQuestion = "";
  
  //     const translating = transQuestion => {
  //       if (question !== transQuestion) {
  //         this.setState({ question: transQuestion });
  //         cookie.save("question", transQuestion, { path: "/" });
  //       }
  //     };
  
  //     // translate the question when selecting a different language
  //     if (language !== cookieLanguage) {
  //       googleTranslate.translate(question, language, function(err, translation) {
  //         transQuestion = translation.translatedText;
  //         translating(transQuestion);
  //       });
  //     }
  
  //     this.setState({ language });
  //     cookie.save("language", language, { path: "/" });
  //   };
  
  //   // just some inline css to center our demo
  //   divStyle = {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     height: "100vh",
  //     width: "100wh"
  //   };
  // }


  return (
    
    <div id="HomePage">
      <div id="landing">
        {message}
        <br></br>
        {button}
        {logout}
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