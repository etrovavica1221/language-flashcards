import React, { useState } from 'react';
// import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import '../styles/Flashcard.css';

const Flashcard = ({ flashcard, setIsCardFlipped, userState}) => {
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

  // const handleDelete = ({userState}) => {
  //   console.log(userState);
  //   axios
  //   .delete(`https://translation-app-mcrcodes.herokuapp.com/myFlashcards?userID=${userState.userID._id}`)
  //   .then(({ res }) => {
  //     console.log(res.status);
  //   },[])
  //   .catch(console.log);
  // }

   return (
       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
         <div className="card-container" onClick={handleClick}>
           {/* <button onClick={handleDelete}>X</button> */}
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
   );
 };

 export default Flashcard;
