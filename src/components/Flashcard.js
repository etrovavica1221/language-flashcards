import React, { useState } from 'react';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import '../styles/Flashcard.css';

const Flashcard = ({ flashcard, setIsCardFlipped, isDeleted, setIsDeleted }) => {
   const [isFlipped, setIsFlipped] = useState(false);
  
   const handleClick = () => {
    setIsFlipped(true)
    setIsCardFlipped(true)
    setTimeout(() => { 
      setIsFlipped(false)}, 
      1500)
      setTimeout(() => { 
        setIsCardFlipped(false)
      },1500)
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    axios
    .delete(`https://translation-app-mcrcodes.herokuapp.com/deleteFlashcard?id=${flashcard._id}`)
    .then(() => {
      console.log('Deleted!');
      setIsDeleted(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  let deleted = " was deleted!";

   return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-container" onClick={handleClick}>
        <button id="flashcard-delete-btn" onClick={handleDelete}>{window.screen.width < 600 ? 'x' : 'X'}</button>
          <div className="card-text-original">
            {flashcard.initialPhrase.toUpperCase()}
            {isDeleted && deleted}
          </div>
        </div>
        <div className="card-container" onClick={handleClick}>
          <div className="card-text-original">
            {flashcard.initialPhrase.toUpperCase()}
            {isDeleted && deleted}           
          </div>
          <div className="card-text-translation">
            {flashcard.translatedPhrase.toUpperCase()}
            {isDeleted && deleted}
          </div>
        </div>
      </ReactCardFlip>
   );
 };

 export default Flashcard;
