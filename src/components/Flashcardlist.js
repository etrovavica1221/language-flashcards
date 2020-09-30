import React, { useState, useEffect } from 'react';
import axios from "axios";
import Flashcard from './Flashcard';

let savedFlashcards = [];

const FlashcardList = ({ userState }) => {
    const [flashcards, setFlashcards] = useState(savedFlashcards);

    useEffect(() => {
        let isMounted = true
        axios
         .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
         .then(({ data }) => {
            if(isMounted){
                setFlashcards(data)
            }
         })
         .catch(console.log);
         return () => { isMounted = false };
    })

    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard._id} />
            })}
        </div>
    )
 };

 export default FlashcardList;