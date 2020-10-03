import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Flashcard from './Flashcard';
import '../styles/Flashcardlist.css';

let savedFlashcards = [];

const FlashcardList = ({ userState }) => {
    const [flashcards, setFlashcards] = useState(savedFlashcards);
    const [randomFlashcard, setRandomFlashcard] = useState()
    const [loading, setLoading] = useState(true);

    const getNewCard = () => {
        setRandomFlashcard(flashcards[Math.floor(Math.random()*flashcards.length)]);
    }

    useEffect(() => {
        let isMounted = true;
        axios
         .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
         .then(({ data }) => {
            if(isMounted){
                console.log(data);
                setFlashcards(data);
                setRandomFlashcard(data[Math.floor(Math.random()*data.length)]);
                setLoading(false);
            }
         },[])
         .catch(console.log);
         return () => { isMounted = false };
    },[]);
    
    return (
        <div id="Flashcardlist">
            <div className="card-grid">
                {!loading && <Flashcard flashcard={randomFlashcard} />}
            </div>
            <button id="next-card-submit" onClick={getNewCard} type="submit"><FontAwesomeIcon icon={ faArrowCircleRight } /></button>
        </div>
    )
 };

 export default FlashcardList;