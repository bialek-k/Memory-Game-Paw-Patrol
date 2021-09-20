import React, { useEffect } from "react";
import Card from "../Card/Card";
import "./CardBoard.css";

const CardBoard = ({
  cards,
  setCards,
  frontCard,
  setFrontCard,
  cardFound,
  setCardFound,
  finalCards,
  setFinalCards,
  timeOn,
  setTimeOn,
  moves,
  setMoves,
  setEndGame,
  setLogin,
  setFinishRound,
  setStartGame,
}) => {
  useEffect(() => {
    if (frontCard.length > 1) {
      if (
        frontCard[0].photo === frontCard[1].photo &&
        frontCard[0].id !== frontCard[1].id
      ) {
        setCardFound([...frontCard]);
        setFrontCard([]);
        setFinalCards([...cards]);
        setCardFound([...cardFound, ...frontCard]);
      } else {
        setFrontCard([]);
        setTimeout(() => {
          setCards([...finalCards]);
        }, 500);
      }
      setMoves(moves + 1);
    }
    const workingTimer = () => {
      setTimeout(() => {
        setEndGame(true);
      }, 500);
    };

    if (cardFound.length === cards.length) {
      setTimeOn(false);
      setLogin(false);
      setFinishRound(true);
      setStartGame(false);
      workingTimer();
    }
    return () => {
      clearTimeout(workingTimer);
    };
  });

  return (
    <div className="cardBoard">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          photo={card.photo}
          flipped={card.flipped}
          setCards={setCards}
          frontCard={frontCard}
          setFrontCard={setFrontCard}
          cards={cards}
          id={card.id}
          cardFound={cardFound}
          setCardFound={setCardFound}
          timeOn={timeOn}
          setTimeOn={setTimeOn}
        />
      ))}
    </div>
  );
};

export default CardBoard;
