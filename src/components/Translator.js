import React from 'react';
import { googleTranslate } from "../utils/googleTranslate";
import '../styles/Translator.css';

const Translator = ({ userState, valueState, setValueState }) => {
  if (valueState.initialPhrase){
    googleTranslate.translate(valueState.initialPhrase, userState.translateTo, function(err, translation) {
      
      setValueState({
        initialPhrase: valueState.initialPhrase,
        translatedPhrase: translation.translatedText,
      })
    })
  };
    return (
      <textarea type="text" placeholder="Translated phrase..." value={valueState.translatedPhrase} required name="translatedPhrase"/>        
    );
};

export default Translator; 
