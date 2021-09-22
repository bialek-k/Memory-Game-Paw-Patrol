import React, { useState } from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

import { initialCards } from "./Photos";

const CardBoard = () => {
  const [cards, setCards] = useState(initialCards);
  const [pairCards, setPairCards] = useState();

  const flippedCard = (clickedCard) => {
    const idx = clickedCard.id;
    const findedCard = cards[idx];

    setPairCards([...pairCards, ...findedCard]);
  };

  console.log(pairCards);

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
        flippedCard={flippedCard}
      />
    );
  });

  return <div className={classes.CardBoard}>{singleCard}</div>;
};

export default CardBoard;
