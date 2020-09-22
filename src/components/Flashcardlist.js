import React from 'react';
/*import Flashcard from './Flashcard';*/
import Translator from './Translator';

const FlashcardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Translator flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
};

// export default FlashcardList;