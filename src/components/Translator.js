import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Translator.css';

const Translator = ({ valueState }) => {
    return (
      <textarea 
        type="text" placeholder="Translated phrase..." 
        value={valueState.translatedPhrase} 
        readOnly 
        required 
        name="translatedPhrase"
      />        
    );
};

Translator.propTypes = {
  value: PropTypes.string,
}

export default Translator; 
