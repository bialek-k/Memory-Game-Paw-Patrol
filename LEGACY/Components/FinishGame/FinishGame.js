import React from "react";
import "./FinishGame.css";

const FinishGame = ({
  moves,
  time,
  playerName,
  setLogin,
  setFinishRound,
  setStartGame,
  finishRound,
}) => {
  const getSec = (base) => Math.floor((time / base) % 60);

  const resetGame = () => {
    setFinishRound(false);
    // setStartGame(true);
    // setLogin(false);
    // console.log("game");
  };

  return (
    <div className="end-container">
      <div className="end-modal">
        <h1>Well done {playerName} !</h1>
        <div className="stats">
          <span>Your time is: {getSec(1000)} sec</span>
          <span>You make: {moves} moves</span>
        </div>
        <div className="btn">
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    </div>
  );
};

export default FinishGame;
