import React, { useState } from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

import Rocky from "../../photos/Rocky.png";
import Chase from "../../photos/Chase.png";
import Marshall from "../../photos/Marshall.png";
import Rubble from "../../photos/Rubble.png";
import Skye from "../../photos/Skye.png";
import Zuma from "../../photos/Zuma.png";

const initialCards = [
  { id: 1, photo: Rocky, flipped: true },
  { id: 2, photo: Chase, flipped: false },
  { id: 3, photo: Marshall, flipped: false },
  { id: 4, photo: Rubble, flipped: false },
  { id: 5, photo: Skye, flipped: false },
  { id: 6, photo: Zuma, flipped: false },
  { id: 7, photo: Rocky, flipped: false },
  { id: 8, photo: Chase, flipped: false },
  { id: 9, photo: Marshall, flipped: true },
  { id: 10, photo: Rubble, flipped: false },
  { id: 11, photo: Skye, flipped: false },
  { id: 12, photo: Zuma, flipped: false },
];

const CardBoard = () => {
  const [cards, setCards] = useState(
    initialCards.sort(() => Math.random() - 0.4)
  );
  const [pairCards, setPairCards] = useState();

  const flippedCard = (clickedCard) => {
    const idx = clickedCard.id;
    const findedCard = cards[idx];
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
        flippedCard={flippedCard}
      />
    );
  });

  return <div className={classes.CardBoard}>{singleCard}</div>;
};

export default CardBoard;
