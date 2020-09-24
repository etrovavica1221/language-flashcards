import React, { useState, useEffect } from 'react';
import cookie from "react-cookies";
import { googleTranslate } from "./utils/googleTranslate";
/*import FlashcardList from './FlashcardList'*/
import '../styles/Translator.css';

const Translator = ({ flashcard }) => {

  const [languageCodes, setlanguageCodes] = useState([]);
  const [language, setLanguage] = useState(cookie.load("language") ? cookie.load("language") : "en",)
  const [question, setQuestion] = useState(cookie.load("question")
  ? cookie.load("question")
  : "What language do you prefer to read with?");

  useEffect(() => {
    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      setlanguageCodes(languageCodes);
    }
  });

  const changeHandler = language => {
    let cookieLanguage = cookie.load("language");
    let transQuestion = "";

    const translating = transQuestion => {
      if (question !== transQuestion) {
        setQuestion(transQuestion);
        cookie.save("question", transQuestion, { path: "/" });
      }
    };

    // translate the question when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(question, language, function(err, translation) {
        transQuestion = translation.translatedText;
        translating(transQuestion);
      });
    }

    setLanguage(language);
    cookie.save("language", language, { path: "/" });
  }

    return (
      <div>
        <p>{question}</p>

        {/* iterate through language options to create a select box */}
        <select
          className="select-language"
          value={language}
          onChange={e => {changeHandler(e.target.value)}}
        >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );

};
    
/*

    return (
        <div className="main">
       
		  <input className="input-top" type="text" name="Search" placeholder="Translate..."></input>
		  <button>Translate</button>
	    
          <input className="input-bottom" type="text" name="Search" placeholder="....."></input>
          <button>Save to Flashcard</button>
        </div>
);
};*/

export default Translator;