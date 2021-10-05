import React, { useState, useEffect } from "react";
import "./App.css";
import CardBoard from "./components/CardBoard/CardBoard";
import Card from "./components/Card/Card";

import { initialCards } from "./components/Card/Photos";
import Final from "./components/Final/Final";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [clickedCard, setClickedCard] = useState([]);
  const [firstLoad, setFirstLoad] = useState(false);
  const [finalCards, setFinalCards] = useState(initialCards);
  const [cardFound, setCardFound] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const [playerName, setPlayerName] = useState("");
  const [login, setLogin] = useState(true);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [moves, setMoves] = useState(0);

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
      setMoves(moves + 1);
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

  const loginModal = (
    <Login
      playerName={playerName}
      setPlayerName={setPlayerName}
      login={login}
      setLogin={setLogin}
    />
  );

  const game = (
    <>
      <CardBoard
        cards={cards}
        firstLoad={firstLoad}
        setCards={setCards}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />
    </>
  );

  return (
    <div className="App">
      {game}
      {/* {login && loginModal} */}
      {/* {endGame && !firstLoad ? <Final resetGame={resetGameHandler} /> : null} */}
      {/* {!endGame && <CardBoard>{cardsOnTable}</CardBoard>} */}
      {/* {!endGame && gameBoard} */}
    </div>
  );
};

export default App;
