import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import { initialCards } from "./components/Card/Photos";

import CardBoard from "./components/CardBoard/CardBoard";
import Game from "./components/Game/Game";
import Final from "./components/Final/Final";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";

/*
 initialCards.sort(() => Math.random() - 0.4)
*/

const App = () => {
  const [cards, setCards] = useState(
    initialCards.sort(() => Math.random() - 0.4)
  );
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
  const [round, setRound] = useState(1);

  useEffect(() => {
    // console.log(cards);
    console.log(clickedCard);
  });

  // finding pairs of cards
  useEffect(() => {
    if (clickedCard.length > 1 && clickedCard.length < 3) {
      if (
        clickedCard[0].id !== clickedCard[1].id &&
        clickedCard[0].name === clickedCard[1].name
      ) {
        const cardToFinal = clickedCard[1];
        // setCardFound([cardToFinal]);
        setFinalCards([...cards]);
        setClickedCard([]);
      } else {
        setClickedCard([]);
        setTimeout(() => {
          setCards([...finalCards]);
        }, 1000);
      }
      setMoves(moves + 1);
    }
  });

  // check final
  useEffect(() => {
    const cardsOpened = finalCards.filter((card) => card.flipped);
    if (cardsOpened.length > 11) {
      // setTimeout(() => {
      setCardFound([]);
      setEndGame(true);
      setTimeOn(false);
      // }, 1500);
    }
  }, [finalCards, endGame, timeOn]);

  const resetGameHandler = () => {
    setTimeout(() => {
      setCards(initialCards);
      setFinalCards(initialCards);
      setClickedCard([]);
      setCardFound([]);
      setMoves(0);
      setEndGame(false);
      setRound(round + 1);
    }, 1700);
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
        round={round}
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
        {gameBoard}
        {/* {!endGame && !login ? gameBoard : null} */}
        {/* {endGame && !firstLoad ? (
          <Final resetGame={resetGameHandler} moves={moves} round={round} />
        ) : null}
        {login && loginModal} */}
      </Game>
    </div>
  );
};

export default App;
