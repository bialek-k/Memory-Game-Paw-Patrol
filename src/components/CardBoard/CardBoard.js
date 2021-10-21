import React from "react";
import classes from "./CardBoard.module.css";

import Card from "../Card/Card";

const CardBoard = (props) => {
  const cardsOnTable = props.cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={props.cards}
        setCards={props.setCards}
        photo={card.photo}
        flipped={card.flipped}
        cardToCompare={props.cardToCompare}
        setCardToCompare={props.setCardToCompare}
        frontCards={props.frontCards}
        setFrontCards={props.setFrontCards}
      />
    );
  });

  return <div className={classes.CardBoard}>{cardsOnTable}</div>;
};

export default CardBoard;
