import React from "react";

import classes from "./Final.module.css";

const Final = (props) => {
  const resetGame = () => {
    props.resetGame();
  };

  return (
    <div className={classes.container}>
      <h1>Pięknie! {props.playerName}</h1>
      <div className={classes.stats}>
        <span>Your time: 15s</span>
        <span>You make 8 moves</span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.reset} onClick={resetGame}>
          Gram dalej
        </button>
        <button className={classes.end}>Koniec gry</button>
      </div>
    </div>
  );
};

export default Final;
