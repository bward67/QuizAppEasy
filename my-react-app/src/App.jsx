import Header from "./Header.jsx";
//import Quiz from "./Quiz.jsx";
import Footer from "./Footer.jsx";
import data from "./data.js";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
//import nanoid from "nanoid";

export default function App() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [winner, setWinner] = useState(false);

  function optionsClicked(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    //then move to the next question
    //! but if we are at the last item in the array we want to display results
    if (currentQuestion + 1 < data.length) {
      //we could have said 10 here but what if we add or remove some questions in the future
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  }
  useEffect(() => {
    if (score === 10) {
      setWinner(true);
    }
  }, [score]);

  function resetQuiz() {
    //console.log("reset");
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
    setWinner(false);
  }

  return (
    <>
      <Header />
      {winner && <Confetti />}
      {showFinalResults ? (
        <Footer
          key={data.id}
          data={data}
          score={score}
          winner={winner}
          resetQuiz={() => resetQuiz()}
        />
      ) : (
        <div>
          <div className="current-score">Current score {score}</div>
          <div className="question-1-of">
            Question {currentQuestion + 1} of {data.length}
          </div>
          <h3>{data[currentQuestion].question}</h3>
          <div className="answer-container">
            {data[currentQuestion].options.map((item) => (
              <button
                onClick={() => optionsClicked(item.isCorrect)}
                key={item.id}
                className="answers"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
