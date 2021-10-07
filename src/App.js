import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { initialCards } from "./components/Card/Photos";

import CardBoard from "./components/CardBoard/CardBoard";
import Game from "./components/Game/Game";
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

  // useEffect(() => {
  //   setFirstLoad(true);
  //   setTimeout(() => {
  //     setFirstLoad(false);
  //     setTimeOn(true);
  //   }, 2500);
  // }, []);

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
        }, 1000);
      }
      setMoves(moves + 1);
    }
  }, [clickedCard, moves, cards, finalCards]);

  // check final
  useEffect(() => {
    const cardsOpened = finalCards.filter((card) => card.flipped);
    if (cardsOpened.length > 11) {
      setTimeout(() => {
        setEndGame(true);
        setTimeOn(false);
      }, 2000);
    }
  });

  const resetGameHandler = () => {
    setTimeout(() => {
      setCards(initialCards);
      setFinalCards(initialCards);
      setMoves(0);
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

  const gameBoard = (
    <div className={classes.gameBoard}>
      <Player
        time={time}
        setTime={setTime}
        timeOn={timeOn}
        playerName={playerName}
        moves={moves}
      />
      <CardBoard
        cards={cards}
        setCards={setCards}
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
        firstLoad={firstLoad}
      />
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <Game>
        {/* {gameBoard} */}
        {endGame && !firstLoad ? (
          <Final resetGame={resetGameHandler} moves={moves} />
        ) : null}
        {login && loginModal}
        {!endGame && !login ? gameBoard : null}
      </Game>
    </div>
  );
};

export default App;
