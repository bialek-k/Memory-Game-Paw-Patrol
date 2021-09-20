import React from "react";
import "./Card.css";

const Card = ({
  photo,
  flipped,
  setCards,
  cards,
  id,
  frontCard,
  setFrontCard,
  setTimeOn,
  cardFound,
  setCardFound,
}) => {
  /* Flip Cards */
  const flipCard = (id) => {
    const newState = cards.map((item) => {
      if (item.id === id) {
        const updateItem = {
          ...item,
          flipped: !item.flipped,
        };
        return updateItem;
      }
      return item;
    });
    setCards(newState);
    compareHandler(newState, id);
    // setTimeOn(true);
  };

  // Add Card to new Array for compare
  const compareHandler = (newState, id) => {
    let clickedCard = newState.filter((card) => card.id === id);
    setFrontCard([...frontCard, ...clickedCard]);
  };

  const cardFront = () => {
    const front = {
      background: `url(${photo})`,
      backgroundSize: "75%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      pointerEvents: "none",
    };
    return front;
  };

  const cardBack = {
    background: "rgba(192, 192, 192, 0.596)",
  };

  return (
    <div
      className="card"
      onClick={() => flipCard(id)}
      style={flipped ? cardFront() : cardBack}
      photo={photo}
    ></div>
  );
};

export default Card;
