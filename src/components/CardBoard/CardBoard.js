import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

import Rocky from "../../photos/Rocky.png";
import Chase from "../../photos/Chase.png";
import Marshall from "../../photos/Marshall.png";
import Rubble from "../../photos/Rubble.png";
import Skye from "../../photos/Skye.png";
import Zuma from "../../photos/Zuma.png";

const initialCards = [
  { id: 0, photo: Rocky, name: "Rocky", flipped: false },
  { id: 1, photo: Chase, name: "Chase", flipped: false },
  { id: 2, photo: Marshall, name: "Marshall", flipped: false },
  { id: 3, photo: Rubble, name: "Rubble", flipped: false },
  { id: 4, photo: Skye, name: "Skye", flipped: false },
  { id: 5, photo: Zuma, name: "Zuma", flipped: false },
  { id: 6, photo: Rocky, name: "Rocky", flipped: false },
  { id: 7, photo: Chase, name: "Chase", flipped: false },
  { id: 8, photo: Marshall, name: "Marshall", flipped: false },
  { id: 9, photo: Rubble, name: "Rubble", flipped: false },
  { id: 10, photo: Skye, name: "Skye", flipped: false },
  { id: 11, photo: Zuma, name: "Zuma", flipped: false },
];

const CardBoard = () => {
  const [cards, setCards] = useState(initialCards);
  const [clickedCard, setClickedCard] = useState();

  useEffect(() => {
    console.log(clickedCard);

    cards.map((card) => {
      if (clickedCard === card.name) {
        const changeCardSide = {
          ...card,
          flipped: !card.flipped,
        };
        console.log(changeCardSide);
        return changeCardSide;
      }
      // return card;
    });
  }, [clickedCard]);

  const cardsOnGame = cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={cards}
        name={card.name}
        setCards={setCards}
        photo={card.photo}
        flipped={card.flipped}
        setClickedCard={setClickedCard}
      />
    );
  });

  return <div className={classes.CardBoard}>{cardsOnGame}</div>;
};

export default CardBoard;
