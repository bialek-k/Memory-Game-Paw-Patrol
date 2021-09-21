import React from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

const CardBoard = ({ cards }) => {
  const singleCard = cards.map((card, idx) => {
    return <Card id={idx} key={idx} cards={cards} />;
  });

  return <div className={classes.CardBoard}>{singleCard}</div>;
};

export default CardBoard;
