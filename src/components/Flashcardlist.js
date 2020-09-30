import React, { useState, useEffect } from 'react';
import axios from "axios";
import Flashcard from './Flashcard';

let savedFlashcards = [];

const FlashcardList = ({ userState }) => {
    const [flashcard, setFlashcard] = useState(savedFlashcards);

    useEffect(() => {
        axios
         .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
         .then(({ data }) => {
            setFlashcard(data)
        });        
    })

    return (
        <div className="card-grid">
            {flashcard.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard._id} />
            })}
        </div>
    )
 };

 export default FlashcardList;