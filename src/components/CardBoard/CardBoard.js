import React, { useEffect } from "react";
import classes from "./CardBoard.module.css";

import Card from "../Card/Card";

const CardBoard = (props) => {
  useEffect(() => {
    console.log("cardboard.js", props.cards);
  }, []);

  const cardsOnTable = props.cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={props.cards}
        name={card.name}
        setCards={props.setCards}
        cardToCompare={props.cardToCompare}
        setCardToComapre={props.setCardToComapre}
        photo={card.photo}
        flipped={card.flipped}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
      />
    );
  });

  return <div className={classes.CardBoard}>{cardsOnTable}</div>;
};

export default CardBoard;
