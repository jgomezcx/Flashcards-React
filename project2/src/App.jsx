import { useState } from 'react'
import './App.css'



const FlashcardViewer = ({ flashcards , fuzzyAnswers }) => { // Accept flashcards as a prop here
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const showNextCard = () => {
    const randomIndex = 0;
    setCurrentCardIndex(randomIndex + 1);
    setFeedback(''); // Reset feedback 
    setUserGuess(''); // Clear the input field
  };

  const showPrevCard = () => {
    const randomIndex = 0;
    setCurrentCardIndex(randomIndex - 1);
    setFeedback(''); // Reset feedback 
    setUserGuess(''); // Clear the input field
  };

  const handleSubmit = (check) => {
    check.preventDefault(); 
    //logic for checking the answer from fuzzyAnswers

    const correctAnswers = fuzzyAnswers.find(word => word.id === flashcards[currentCardIndex].id)?.answers || [];
  
    const isCorrect = correctAnswers.some(answer => answer.toLowerCase() === userGuess.trim().toLowerCase());
    setFeedback(isCorrect ? 'Correct!' : 'Incorrect. Try again!');
  };

  const handleChange = (check) => {
    setUserGuess(check.target.value);
  };

  return (
    <div>
      <h2>Software development Flashcard Set</h2>
      <div style={{width: 600, textAlign: 'center'}}>
        <p>Explore the basics of building software with our easy flashcards! Perfect for anyone willing to test simple knowledge on software development!</p>
      </div>
      <Flashcard card={flashcards[currentCardIndex]} />
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter Guess.' value={userGuess} onChange={handleChange}></input>
          <button type='submit'>Submit</button>
        </form>
        {feedback && <p>{feedback}</p>}
      </div>
      <button onClick={() => {
        showPrevCard();
        setCurrentCardIndex(currentCardIndex === 0 ? flashcards.length - 1 : currentCardIndex - 1);
      }}>Prev</button>
      <button onClick={() => {
        showNextCard();
        setCurrentCardIndex(currentCardIndex === flashcards.length - 1 ? 0 : currentCardIndex + 1);
      }}>Next</button>
      
      <p>Card Number: {currentCardIndex + 1} of {flashcards.length}</p>
    </div>
  );
};


const Flashcard = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card" onClick={() => setShowAnswer(!showAnswer)}>
      {showAnswer ? card.answer : card.question}
    </div>
    
  );
};



function App() {
  const flashcards = [
    { id: 1, question: "What are the three core technologies used in web development?", answer: "HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript." },
    { id: 2, question: "What is HTML and what is its purpose in web development?", answer: "It is used to create the structure and layout of a web page by defining elements such as headings, paragraphs, links, and other content." },
    { id: 3, question: "How does CSS enhance web development?", answer: "CSS (Cascading Style Sheets) is used to control the style and layout of web pages. It allows developers to apply styles (e.g., colors, fonts, spacing) across multiple web pages for consistent design." },
    { id: 4, question: "Explain the role of JavaScript in web development.", answer: "JavaScript is a programming language used to create interactive and dynamic content on web pages. It allows developers to add interactive elements such as animations, forms, and complex user interactions." },
    { id: 5, question: "What is the difference between front-end and back-end development?", answer: "Front-end development refers to the development of the client-side part of a web application, dealing with the user interface and experience. Back-end development focuses on the server-side, dealing with the database, server, and application logic." },
    { id: 6, question: "What does SDLC stand for?", answer: "Software Development Life Cycle." },
    { id: 7, question: "Why do we use SDLC?", answer: "To make sure we build software that does what it's supposed to do, within budget and on time." },
    { id: 8, question: "What is the first thing we do in SDLC?", answer: " 'Planning & Analysis' We figure out what needs to be built by talking to the people who will use the software." },
    { id: 9, question: "In SDLC, what do we do after writing the software?", answer: " 'Test and debug' We check it carefully and test things to make sure it works right and doesn't have any big mistakes." },
    { id: 10, question: "What is the purpose of the Design phase in SDLC?", answer: "The Design phase outlines the 'software architecture and design'. It involves defining overall system architecture and making high-level choices about the design and standards to be followed." },
    // Add more flashcards as needed
  ];

  const fuzzyAnswers = [
    { id: 1, answers: ["html", "css", "js", "Hypertext Markup Language", "Cascading Style Sheets", "JavaScript"] },
    { id: 2, answers: ["structure", "layout", "web page", "elements", "headings", "paragraphs", "links", "content"] },
    { id: 3, answers: ["style", "layout", "web pages", "apply", "colors", "fonts", "spacing", "design"] },
    { id: 4, answers: ["interactive", "dynamic", "content", "animations", "forms", "user interactions"] },
    { id: 5, answers: ["client-side", "server-side", "user interface", "user experience", "database", "server", "application logic"] },
    { id: 6, answers: ["software development life cycle", "software", "development", "life cycle"] },
    { id: 7, answers: ["build", "software", "budget", "time"] },
    { id: 8, answers: ["design phase", "build", "planning", "analysis"] },
    { id: 9, answers: ["test", "debug", "check", "functionality", "works"] },
    { id: 10, answers: ["software architecture", "design", "system architecture", "high-level choices", "standards"]}
  ];
  
  
  return (
    <div className="App">
      <FlashcardViewer flashcards={flashcards} fuzzyAnswers={fuzzyAnswers} />
    </div>
  );
}

export default App