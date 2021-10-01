import React from "react";

import classes from "./Final.module.css";

const Final = (props) => {
  const resetGame = () => {
    props.resetGame();
  };

  return (
    <div className={classes.container}>
      <h1 onClick={resetGame}>Wygrałeś!</h1>
    </div>
  );
};

export default Final;
