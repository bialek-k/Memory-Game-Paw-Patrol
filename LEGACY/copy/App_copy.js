import React, { useState } from "react";

// Import photos
import Rocky from "./photos/Rocky.png";
import Chase from "./photos/Chase.png";
import Marshall from "./photos/Marshall.png";
import Rubble from "./photos/Rubble.png";
import Skye from "./photos/Skye.png";
import Zuma from "./photos/Zuma.png";

import CardBoard from "./Components/CardBoard/CardBoard";
import Player from "./Components/Player/Player";
import Login from "./Components/Login/Login";
import FinishRound from "./Components/FinishRound/FinishRound";

import "./App.css";

function App() {
  const initialCards = [
    { id: 1, photo: Rocky, flipped: false },
    { id: 2, photo: Chase, flipped: false },
    { id: 3, photo: Marshall, flipped: false },
    { id: 4, photo: Rubble, flipped: false },
    { id: 5, photo: Skye, flipped: false },
    { id: 6, photo: Zuma, flipped: false },
    { id: 7, photo: Rocky, flipped: false },
    { id: 8, photo: Chase, flipped: false },
    { id: 9, photo: Marshall, flipped: false },
    { id: 10, photo: Rubble, flipped: false },
    { id: 11, photo: Skye, flipped: false },
    { id: 12, photo: Zuma, flipped: false },
  ];

  const [cards, setCards] = useState(
    initialCards.sort(() => Math.random() - 0.4)
  );

  const [frontCard, setFrontCard] = useState([]);
  const [cardFound, setCardFound] = useState([]);
  const [finalCards, setFinalCards] = useState(initialCards);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [login, setLogin] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [finishRound, setFinishRound] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [reset, setReset] = useState(false);

  const LoginModal = (
    <Login
      setLogin={setLogin}
      playerName={playerName}
      setPlayerName={setPlayerName}
      setStartGame={setStartGame}
    />
  );

  const GameBoard = (
    <div className={endGame ? "app end-game" : "app"}>
      <Player
        time={time}
        setTime={setTime}
        timeOn={timeOn}
        setTimeOn={setTimeOn}
        frontCard={frontCard}
        playerName={playerName}
        setPlayerName={setPlayerName}
        moves={moves}
      />
      <div className="card-grid">
        <CardBoard
          cards={cards}
          setCards={setCards}
          frontCard={frontCard}
          setFrontCard={setFrontCard}
          cardFound={cardFound}
          initialCards={initialCards}
          setCardFound={setCardFound}
          finalCards={finalCards}
          setFinalCards={setFinalCards}
          timeOn={timeOn}
          setTimeOn={setTimeOn}
          moves={moves}
          setMoves={setMoves}
          setEndGame={setEndGame}
          reset={reset}
          setReset={setReset}
          login={login}
          setLogin={setLogin}
          setStartGame={setStartGame}
          setFinishRound={setFinishRound}
        />
      </div>
    </div>
  );

  const Finish = (
    <FinishRound
      moves={moves}
      time={time}
      endGame={endGame}
      setEndGame={setEndGame}
      playerName={playerName}
      reset={reset}
      setReset={setReset}
      setCards={setCards}
      setLogin={setLogin}
      cards={cards}
      initialCards={initialCards}
      setStartGame={setStartGame}
      setFinishRound={setFinishRound}
      startGame={startGame}
    />
  );

  return (
    <div>
      {login ? LoginModal : null}
      {startGame ? GameBoard : null}
      {finishRound ? Finish : null}
    </div>
  );
}

export default App;
