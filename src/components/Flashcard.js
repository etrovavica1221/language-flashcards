import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/Flashcard.css';

const Flashcard = ({ flashcard, setIsCardFlipped}) => {
   const [isFlipped, setIsFlipped] = useState(false);
  
   const handleClick = () => {
    setIsFlipped(true)
    setIsCardFlipped(true)
    setTimeout(() => { 
      setIsFlipped(false)}, 
      1500)
      setTimeout(() => { 
        setIsCardFlipped(false)}, 
        1500)
  };

   return (
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
   );
 };

 export default Flashcard;
