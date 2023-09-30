import './App.css';
import Flashcard from './Components/Flashcard';
import React, { useState } from 'react';


const App = () => {

  const flashcards = [
    { question: 'What breed is the smallest dog?', answer: 'Chihuahua' },
    { question: 'Which breed is known as a firehouse dog?', answer: 'Dalmatian' },
    { question: 'Which dog breed has a distinctive blue-black tongue?', answer: 'Chow Chow' },
    { question: 'What is the most popular dog breed in the United States?', answer: 'Labrador Retriever' },
    { question: 'What breed is nicknamed the "wiener dog"?', answer: 'Dachshund' },
    { question: 'Which dog breed is known for its incredible sense of smell?', answer: 'Bloodhound' },
    { question: 'What small dog breed is known for its fluffy white coat?', answer: 'Bichon Frise' },
    { question: 'Which breed is known as the sacred dog of Egypt?', answer: 'Basenji' },
    { question: 'Which dog breed was originally bred to herd cattle?', answer: 'Border Collie' },
    { question: 'What breed is known as a “nanny dog” because of its gentleness towards children?', answer: 'Staffordshire Bull Terrier' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  function showNextCard() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex)
    setCurrentCardIndex(newIndex);
    setShowAnswer(false);
  }

  return (
    <div className="App">
      <div className = "titles">  
      <h2>Learning about Dogs</h2>
      <h3>Are you the ultimate dog whisperer?!</h3>
      <h4>Number of Cards: 10</h4>

      <Flashcard 
        card={flashcards[currentCardIndex]} 
        showAnswer={showAnswer} 
        toggleAnswer={() => setShowAnswer(!showAnswer)} 
      />
      <button onClick={showNextCard}>Next Card</button>


      
      </div>
      

    </div>
  )
}

export default App
