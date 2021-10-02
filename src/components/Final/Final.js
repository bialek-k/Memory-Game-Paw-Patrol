import React from "react";

import classes from "./Final.module.css";

const Final = (props) => {
  const resetGame = () => {
    props.resetGame();
  };

  return (
    <div className={classes.container}>
      <h1>Pięknie!</h1>
      <div className={classes.buttons}>
        <button onClick={resetGame}>Gram dalej</button>
        <button>Koniec gry</button>
      </div>
    </div>
  );
};

export default Final;
