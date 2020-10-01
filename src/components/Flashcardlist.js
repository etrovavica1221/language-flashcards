import React, { useState, useEffect } from 'react';
import axios from "axios";
import Flashcard from './Flashcard';

let savedFlashcards = [];

const FlashcardList = ({ userState }) => {
    const [flashcard, setFlashcard] = useState(savedFlashcards);

    const getCard = useEffect();

      useEffect(() => {
        axios
        .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
        .then(res => res.json())
        .then(data => {
          let dataCards = data;
          let randomNum = Math.floor(Math.random() * dataCards.length);
          let randomCard = dataCards[randomNum];
  
          setFlashcard(randomCard.flashcard);
        })
    }, [])


    const handleClick = () => {
      getCard();
    }

    return (
      <div>
        <div className="card-grid">
            {<Flashcard flashcard={flashcard} />
            }
        </div>
        <div>
          <button onClick={handleClick} className="button">next</button>
        </div>
      </div>
    )
 };

  /*useEffect(() => {
        axios
         .get(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID}`)
         .then(({ data }) => {
            setFlashcard(data)
            
        });      
    })*/

 //{flashcard.map(flashcard => {
  //return <Flashcard flashcard={random} key={flashcard._id} />
//})}

 export default FlashcardList;