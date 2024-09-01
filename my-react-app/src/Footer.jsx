export default function Footer(props) {
  return (
    <footer>
      <h2 className="winner">
        {props.winner
          ? "Winner Winner Chicken Dinner from the Varna Buffet"
          : "Final results"}
      </h2>
      <div className="score">
        You scored {props.score}/{props.data.length} correct answers
      </div>
      <button onClick={props.resetQuiz} className="play-again">
        Reset Quiz
      </button>
    </footer>
  );
}
