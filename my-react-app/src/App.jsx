import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./data.js";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [winner, setWinner] = useState(false);
  const [wrongMessage, setWrongMessage] = useState("");

  function optionsClicked(isCorrect) {
    if (isCorrect) {
      setWrongMessage("");
      setScore(score + 1);
      if (currentQuestion + 1 < data.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowFinalResults(true);
      }
    } else setWrongMessage("that's not correct, Tom - try again");
  }
  useEffect(() => {
    if (score === 10) {
      setWinner(true);
    }
  }, [score]);

  function resetQuiz() {
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
          <div className="current-score">
            Current score {score}
            <br></br>
            <p className="wrong-message">{wrongMessage}</p>
          </div>
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
