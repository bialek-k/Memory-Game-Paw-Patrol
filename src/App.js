import React, { useState, useEffect } from "react";
import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Card from "./components/Card/Card";

import { initialCards } from "./components/Card/Photos";

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [clickedCard, setClickedCard] = useState([]);
  const [finalCards, setFinalCards] = useState(initialCards);
  const [cardFound, setCardFound] = useState([]);

  // finding pairs of cards
  useEffect(() => {
    if (clickedCard.length > 1) {
      if (
        clickedCard[0].id !== clickedCard[1].id &&
        clickedCard[0].name === clickedCard[1].name
      ) {
        const cardToFinal = clickedCard[1];
        setCardFound([cardToFinal]);
        setClickedCard([]);
        setFinalCards([...cards]);
      } else {
        setClickedCard([]);
        setTimeout(() => {
          setCards([...finalCards]);
        }, 500);
      }
    }
  });

  useEffect(())

  const cardsOnTable = cards.map((card, idx) => {
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
        setClickedCard={setClickedCard}
      />
    );
  });

  return (
    <div className="App">
      <CardBoard>{cardsOnTable}</CardBoard>
    </div>
  );
};

export default App;
