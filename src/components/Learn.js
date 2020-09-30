import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import Translator from './Translator';
import axios from "axios";
import '../styles/Learn.css'
import '../styles/Home.css';
import '../styles/LoginRegister.css';

import { googleTranslate } from "../utils/googleTranslate";

const translateState = {
  initialPhrase: '',
  translatedPhrase: '',
};

const alertState = {
  alert: {
  message: "",
  isSuccess: false,
},
}

const submitState = {
  isSubmmited: false,
}

const Learn = ({ userState, setUserState }) => {
  const [Value, setValue] = useState(translateState);
  const [alert, setAlert] = useState(alertState.alert);
  //update the translation automatically
  
  
  const handleChange = (e) => { 
    setValue({
      ...Value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitTranslation = (e) => {
    googleTranslate.translate(Value.initialPhrase, userState.translateTo, function(err, translation) {
      setValue({
        initialPhrase: Value.initialPhrase,
        translatedPhrase: translation.translatedText,
      })
    })
  }

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .post("https://translation-app-mcrcodes.herokuapp.com/addFlashcard", {
        userID: userState.userID,
        initialPhrase: Value.initialPhrase,
        translatedPhrase: Value.translatedPhrase,
        translateFrom: userState.translateFrom,
        translateTo: userState.translateTo
      })
      .then((response) => {
        setAlert({
          message: "Flashcard saved!",
          isSuccess: false,
        })
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          message: "Unable to save your flashcard",
          isSuccess: false,
        })
      });
    console.log(Value)
  };
  console.log(Value)
  return( 
    <div id="translation-form-container">
      <h1 className="titles">Translate your text and make your own flashcards</h1>
      <div className="hyperlink">{alert.message && (<Alert message={alert.message} success={alert.isSuccess} />)}</div>
      <form id="translation-form" action="submit" onSubmit={handleSave}>
        <textarea type="text" placeholder="Enter text to translate..." required name="initialPhrase" onChange={handleChange} />
        <Translator userState={userState} valueState={Value} setValueState={setValue}/>
      </form>
      <button id="translation-submit" type="submit" onClick={onSubmitTranslation}>Translate</button>
      <div id="learn-buttons-container">
        <button className="large-learn-button" type="submit" >Save to my Flashcards</button>
        <Link to="/flashcard"><button className="large-learn-button" type="button" >View my Flashcards</button></Link>
      </div>
    </div>
  )
};

export default Learn;

