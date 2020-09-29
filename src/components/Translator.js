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
  console.log(valueState.initialPhrase)
    return (
      <div>
      <form id="translation-form" action="submit">
        <input type="text" placeholder="Translated phrase..." value={valueState.translatedPhrase} required name="translatedPhrase"/>        
      </form>
      </div>
    );
};

export default Translator;