import React, { useState, useEffect } from "react";
import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Card from "./components/Card/Card";

import { initialCards } from "./components/Card/Photos";
import Final from "./components/Final/Final";
import Login from "./components/Login/Login";

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [clickedCard, setClickedCard] = useState([]);
  const [firstLoad, setFirstLoad] = useState(false);
  const [finalCards, setFinalCards] = useState(initialCards);
  const [cardFound, setCardFound] = useState([]);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    setFirstLoad(true);
    setTimeout(() => {
      setFirstLoad(false);
    }, 2500);
  }, []);

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

  // check final
  useEffect(() => {
    const cardsOpened = finalCards.filter((card) => card.flipped);
    if (cardsOpened.length > 11) {
      setTimeout(() => setEndGame(true), 2000);
    }
  });

  const resetGameHandler = () => {
    setTimeout(() => {
      setCards(initialCards);
      setFinalCards(initialCards);
      setEndGame(false);
    }, 1000);
  };

  const cardsOnTable = cards.map((card, idx) => {
    let showAll = firstLoad ? true : card.flipped;

    return (
      <Card
        id={idx}
        key={idx}
        cards={cards}
        name={card.name}
        setCards={setCards}
        photo={card.photo}
        flipped={showAll}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />
    );
  });

  return (
    <div className="App">
      <Login />
      {endGame && !firstLoad ? <Final resetGame={resetGameHandler} /> : null}
      {!endGame && <CardBoard>{cardsOnTable}</CardBoard>}
    </div>
  );
};

export default App;
