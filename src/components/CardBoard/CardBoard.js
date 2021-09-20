import React from "react";
import Card from "../Card";
import classes from "./CardBoard.module.css";

const CardBoard = ({ photos }) => {
  console.log(photos);

  return (
    <div className={classes.CardBoard}>
      <Card />
    </div>
  );
};

export default CardBoard;
