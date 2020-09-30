import React from 'react';
import '../styles/Translator.css';

const Translator = ({ userState, valueState, setValueState}) => {
    return (
      <textarea type="text" placeholder="Translated phrase..." value={valueState.translatedPhrase} required name="translatedPhrase"/>        
    );
};

export default Translator; 
