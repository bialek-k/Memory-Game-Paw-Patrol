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
  { id: 0, photo: Rocky, flipped: false },
  { id: 1, photo: Chase, flipped: false },
  { id: 2, photo: Marshall, flipped: false },
  { id: 3, photo: Rubble, flipped: false },
  { id: 4, photo: Skye, flipped: false },
  { id: 5, photo: Zuma, flipped: false },
  { id: 6, photo: Rocky, flipped: false },
  { id: 7, photo: Chase, flipped: false },
  { id: 8, photo: Marshall, flipped: false },
  { id: 9, photo: Rubble, flipped: false },
  { id: 10, photo: Skye, flipped: false },
  { id: 11, photo: Zuma, flipped: false },
];

const CardBoard = () => {
  const [cards, setCards] = useState(initialCards);
  const [cardToCompare, setCardToCompare] = useState();

  const flippedCard = cards.filter((card) => card.flipped);
  console.log(cardToCompare);

  const cardsOnGame = cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={cards}
        name={card.photo}
        setCards={setCards}
        photo={card.photo}
        flipped={card.flipped}
        setCardToCompare={setCardToCompare}
      />
    );
  });

  return <div className={classes.CardBoard}>{cardsOnGame}</div>;
};

export default CardBoard;
