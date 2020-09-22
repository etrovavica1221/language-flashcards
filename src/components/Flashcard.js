// import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';
// import '../styles/Flashcard.css';

// const Flashcard = ({ flashcard }) => {

//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//       <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//         <div className="card-container" onClick={handleClick}>
//           <div className="card-text-original">
//             {flashcard.original}
//           </div>
//         </div>

//         <div className="card-container" onClick={handleClick}>
//           <div className="card-text-original">
//             {flashcard.original}
//           </div>
//           <div className="card-text-translation">
//             {flashcard.translation}
//           </div>
//         </div>
//       </ReactCardFlip>
//   );
// };

// export default Flashcard;