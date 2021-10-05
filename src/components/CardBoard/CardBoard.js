import React, { useEffect } from "react";
import classes from "./CardBoard.module.css";

import Card from "../Card/Card";

const CardBoard = (props) => {
  useEffect(() => {
    const backColors = ["#bd221f", "#099eda", "#fee301", "#abb7bd"];
    const index = Math.floor(Math.random() * backColors.length);
  }, []);

  const cardsOnTable = props.cards.map((card, idx) => {
    let showAll = props.firstLoad ? true : card.flipped;
    return (
      <Card
        id={idx}
        key={idx}
        cards={props.cards}
        name={card.name}
        setCards={props.setCards}
        photo={card.photo}
        flipped={showAll}
        clickedCard={props.clickedCard}
        setClickedCard={props.setClickedCard}
      />
    );
  });
  return <div className={classes.CardBoard}>{cardsOnTable}</div>;
};

export default CardBoard;
