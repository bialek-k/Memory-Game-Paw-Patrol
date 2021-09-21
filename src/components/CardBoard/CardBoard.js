import React from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

import { initialCards } from "../CardBoard/Photos";

const CardBoard = () => {
  console.log(initialCards);

  const singleCard = initialCards.map((card) => {
    return <Card id={card.id} key={card.id} photo={card.photo} />;
  });

  return <div className={classes.CardBoard}>{singleCard}</div>;
};

export default CardBoard;
