import "./App.css";
import Flashcard from "./Components/Flashcard";
import React, { useState } from "react";

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

  //added const
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState(""); // for the user's input
  const [feedback, setFeedback] = useState(""); // for displaying feedback

  //added this function
  function handleGuessSubmit() {
    if (userGuess.toLowerCase() === flashcards[currentCardIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! Try again.");
    }
  }

//added this
  function showPreviousCard() {
   if (currentCardIndex > 0) {
     setCurrentCardIndex(currentCardIndex - 1);
   } else {
      setCurrentCardIndex(flashcards.length - 1); // loop back to the last card
    }
   resetCardState();
  }

  //added this, moves sequentially through the cards
  function showNextCard() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentCardIndex);
    setCurrentCardIndex(newIndex);
    resetCardState();
  }

  function resetCardState() {
    setShowAnswer(false);
    setUserGuess('');
    setFeedback(''); // This will reset the feedback state.
  }

  
  //added here
  return (
    <div className="App">
      <div className="titles">
        <h2>Learning about Dogs</h2>
        <h3>Are you the ultimate dog whisperer?!</h3>
        <h4>Number of Cards: 10</h4>

        <input 
          type="text" 
          placeholder="Enter your guess" 
          value={userGuess}
          onChange={e => setUserGuess(e.target.value)}
        />
        <button onClick={handleGuessSubmit}>Submit Guess</button>
        {feedback && (
          <div 
           className={`feedback-message ${feedback === "Correct!" ? "correct-feedback" : "incorrect-feedback"}`}
          >
           {feedback}
          </div>
        )}

        <Flashcard
          card={flashcards[currentCardIndex]}
          showAnswer={showAnswer}
          toggleAnswer={() => setShowAnswer(!showAnswer)}
        />
        <button onClick={showPreviousCard}>Previous Card</button>
        <button onClick={showNextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default App;
