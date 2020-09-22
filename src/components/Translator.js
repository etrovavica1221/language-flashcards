import React, { useState, useEffect } from 'react';
/*import FlashcardList from './FlashcardList'*/
import '@vitalets/google-translate-api';
import './Translator.css';
/*import axios from 'axios';*/

const Translator = ({ flashcard }) => {
    
/*const opts = {
    to: axios.languages.getCode("spanish"), // Get code of language.
    from: "en", // Defaults to "auto" which auto detects the language.
};  

useEffect(() => {
    axios
    .post("Hello World!", opts)
    .then(response => {
        console.log(response.text); // Translated text...
        console.log(response.from.text.value); // Return auto-corrected source text highlighting the issue.
        console.log(response.from.language.iso); // Translated from...
    })
    .catch(console.error);
});

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }*/

    return (
        <div className="main">
       
		  <input className="input-top" type="text" name="Search" placeholder="Translate..."></input>
		  <button onClick={handleClick}>Translate</button>
	    
          <input className="input-bottom" type="text" name="Search" placeholder="....."></input>
          <button>Save to Flashcard</button>
        </div>
);
};

export default Translator;