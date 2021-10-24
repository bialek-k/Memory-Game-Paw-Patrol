import React, { useState, useEffect } from "react";

import { PlaySound } from "./helpers/sound";

import classes from "./App.module.css";

import { initialCards } from "./components/Card/Photos";

import CardBoard from "./components/CardBoard/CardBoard";
import Game from "./components/Game/Game";
import Final from "./components/Final/Final";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";

import FindSound from "./audio/find.wav";
import BackSound from "./audio/back.wav";

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [cardToCompare, setCardToCompare] = useState([]);
  const [frontCards, setFrontCards] = useState([]);
  const [finalCards, setFinalCards] = useState(initialCards);
  const [endGame, setEndGame] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [login, setLogin] = useState(true);
  const [moves, setMoves] = useState(0);
  const [round, setRound] = useState(1);
  const [volume, setVolume] = useState(true);

  // MAIN LOGIC - FOUNDING PAIR OF CARDS
  useEffect(() => {
    if (cardToCompare.length > 1 && cardToCompare.length < 3) {
      if (
        cardToCompare[0].id !== cardToCompare[1].id &&
        cardToCompare[0].name === cardToCompare[1].name
      ) {
        {
          volume && PlaySound(FindSound, 0.5, 300);
        }

        setCardToCompare([]);
        setFinalCards([...cards]);
      } else {
        {
          volume && PlaySound(BackSound, 0.5, 300);
        }

        setFrontCards([]);
        setCardToCompare([]);
        setTimeout(() => {
          setCards([...finalCards]);
        }, 500);
      }
      setMoves(moves + 1);
    }
  }, [cardToCompare, cards, finalCards, moves]);

  // check final
  useEffect(() => {
    const cardsOpened = finalCards.filter((card) => card.flipped);
    if (cardsOpened.length > 11) {
      setTimeout(() => {
        setEndGame(true);
      }, 1000);
    }
  }, [finalCards, endGame]);

  const resetGameHandler = () => {
    setTimeout(() => {
      setCards(initialCards);
      setFinalCards(initialCards);
      setMoves(0);
      setEndGame(false);
      setRound(round + 1);
    }, 500);
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
        playerName={playerName}
        moves={moves}
        round={round}
        volume={volume}
        setVolume={setVolume}
      />
      <CardBoard
        cards={cards}
        volume={volume}
        setCards={setCards}
        cardToCompare={cardToCompare}
        setCardToCompare={setCardToCompare}
        frontCards={frontCards}
        setFrontCards={setFrontCards}
      />
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <Game>
        {!endGame && !login ? gameBoard : null}
        {endGame && (
          <Final
            resetGame={resetGameHandler}
            moves={moves}
            round={round}
            volume={volume}
          />
        )}
        {login && loginModal}
      </Game>
    </div>
  );
};

export default App;

/*
 initialCards.sort(() => Math.random() - 0.4)
*/
