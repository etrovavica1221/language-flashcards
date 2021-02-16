import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Translator from './Translator';
import Alert from './Alert';
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
    isVisible: false,
  },
}

const Learn = ({ userState }) => {
  const [Value, setValue] = useState(translateState);
  const [alert, setAlert] = useState(alertState.alert);
  //update the translation automatically
  
  const handleChange = (e) => { 
    setValue({
      ...Value,
      [e.target.name]: e.target.value,
      translatedPhrase: '',
    });
    setAlert({
      message: "",
      isVisible: false,
    })
  };

  const selectedText = (e) => {
    let selection = window.getSelection().toString();
    setValue({
      ...Value,
      [e.target.name]: selection,
      translatedPhrase: '',
    })
  }

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
    if (Value.initialPhrase.length < 30) {
    axios
      .post("https://translation-app-mcrcodes.herokuapp.com/addFlashcard", {
        userID: userState.userID,
        initialPhrase: Value.initialPhrase,
        translatedPhrase: Value.translatedPhrase,
        translateTo: userState.translateTo
      })
      .then(() => {
        setAlert({
          message: "FLASHCARD IS SAVED!",
          isVisible: true,
        })
        setTimeout(() => { 
          setAlert({
            message: "",
            isVisible: false,
          })}, 
          2000)
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          message: "Unable to save your flashcard!",
          isVisible: true,
        })
        setTimeout(() => { 
          setAlert({
            message: "",
            isVisible: false,
          })}, 
          2000)
      });
    } else {
      setAlert({
        message: "The flashcard can't be longer than 30 characters long!",
        isVisible: true,
      })
      setTimeout(() => { 
        setAlert({
          message: "",
          isVisible: false,
        })}, 
        3000)
    }
  };

  return( 
    <div id="translation-form-container">
      <h1 className="titles">Translate your text and make your own flashcards</h1>
      <p className="note">*Highlight the desired word or phrase with your cursor to translate and add to flashcards separately</p>
      <form id="translation-form" action="submit" onSubmit={handleSave}>
        <textarea type="text" placeholder="Enter text to translate..." required name="initialPhrase" onMouseUpCapture={selectedText} onChange={handleChange}/>
        <Translator userState={userState} valueState={Value} setValueState={setValue}/>
      </form>
      <button id="translation-submit" type="submit" onClick={onSubmitTranslation}>Translate</button>
      <div id="learn-buttons-container">
        <button className="large-learn-button" type="submit" onClick={handleSave}>Save to my Flashcards</button>
        <Link to="/flashcard"><button className="large-learn-button" type="button" >View my Flashcards</button></Link>
      </div>
      {alert.message && (
          <Alert message={alert.message} success={alert.isVisible} />
      )}
    </div>
  )
};

Learn.propTypes = {
  initialPhrase: PropTypes.string,
  translatedPhrase: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default Learn;