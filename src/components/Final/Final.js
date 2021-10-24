import React, { useEffect } from "react";
import { PlaySound } from "../../helpers/sound";
import WinSound from "../../audio/win.wav";
import classes from "./Final.module.css";

const Final = (props) => {
  useEffect(() => {
    props.volume && PlaySound(WinSound, 0.4);
  }, []);

  const resetGame = () => {
    props.resetGame();
  };

  return (
    <div className={classes.container}>
      <h1>Super!{props.playerName}</h1>
      <div className={classes.stats}>
        <span>You make {props.moves} moves</span>
        <span>in {props.round} rounds</span>
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
