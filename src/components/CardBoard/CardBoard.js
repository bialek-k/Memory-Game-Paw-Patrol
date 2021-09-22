import React, { useState } from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

import { initialCards } from "./Photos";

const CardBoard = () => {
  const [cards, setCards] = useState(initialCards);

  const clickedCard = (changeFlip) => {
    console.log(changeFlip.id);
  };

  const singleCard = cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={cards}
        name={card.name}
        setCards={setCards}
        photo={card.photo}
        flipped={card.flipped}
        clickedCard={clickedCard}
      />
    );
  });

  return <div className={classes.CardBoard}>{singleCard}</div>;
};

export default CardBoard;
