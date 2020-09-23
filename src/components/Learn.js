import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learn.css';

const translateState = {
  value: '',
};

const Learn = () => {
  let saveButton = <Link to="/learn"><button className="base-button" id="large-home-button" type="button">View My Flashcards!</button></Link>;

  const [Value, setCurrValue] = useState(translateState.value);

  const handleChange = (e) => {
    setCurrValue({
      ...Value,
      value: e.target.value,
    });
  };

  return (
    <div id="Learn"> 
      <Link className="learn-link" to="/my-flashcards">
        <li className="learn-item">
          Revise my flashcards
        </li>
      </Link>
      <h1 className="titles">OR</h1>
      <div id="translation-form-container">
            <h1 className="titles">Translate your text and make your own flashcards</h1>
            <form id="translation-form" action="submit">
                <textarea type="text" placeholder="Enter text to translate..." required name="textInput" onChange={handleChange} />
                <textarea value={Value.value} type="text" placeholder="Translation..." required name="textOutput" />
            </form>
            {saveButton}
      </div>
    </div>
  ); 
};

export default Learn;
