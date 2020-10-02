import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
//import Flashcard from './Flashcard';
import '../styles/Flashcardlist.css';
import '../styles/Flashcard.css'

let savedFlashcards = [];

const FlashcardList = ({ userState, flashcard }) => {
    const [flashcards, setFlashcards] = useState(savedFlashcards);
    const [randomFlashcard, setRandomFlashcard] = useState()
    const [loading, setLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);

   const handleClick = () => {
     setIsFlipped(!isFlipped);
    }

    const getNewCard = () => {
        setRandomFlashcard(flashcards[Math.floor(Math.random()*flashcards.length)]);
    }

    useEffect(() => {
        let isMounted = true;
        axios
         .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
         .then(({ data }) => {
            if(isMounted){
                console.log(data)
                setFlashcards(data)
                setRandomFlashcard(data[Math.floor(Math.random()*data.length)]);
                setLoading(false);
            }
         },[])
         .catch(console.log);
         return () => { isMounted = false };
    },[]);
    
    /*return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div id="Flashcardlist">
            <div className="card-grid">
                {!loading && <Flashcard flashcard={randomFlashcard} />}
            </div>
            <button id="next-card-submit" onClick={getNewCard} type="submit"><FontAwesomeIcon icon={ faArrowCircleRight } /></button>
          </div>
        </ReactCardFlip>
    );
 };*/
  
  return (
      <div id="Flashcardlist">
        <div className="card-grid">
            {!loading && {randomFlashcard}}
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="card-container" onClick={handleClick}>
              <div className="card-text-original">
               {flashcard.initialPhrase.toUpperCase()}
              </div>
            </div>
            <div className="card-container" onClick={handleClick}>
              <div className="card-text-original">
               {flashcard.initialPhrase.toUpperCase()}
              </div>
              <div className="card-text-translation">
               {flashcard.translatedPhrase.toUpperCase()}
              </div>
            </div>
          </ReactCardFlip>
            <button id="next-card-submit" onClick={getNewCard} type="submit"><FontAwesomeIcon icon={ faArrowCircleRight } />
            </button>
        </div>
      </div>
  );
};

/*<div className="card-grid">
            {!loading flashcard={randomFlashcard}
            <div className="card-grid">
            {!loading && flashcard={randomFlashcard}}
          </div>
          </div>*/

 export default FlashcardList;
