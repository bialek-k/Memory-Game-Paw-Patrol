import React from "react";
import classes from "../Card/Card.module.css";

const Card = ({ id, cards, setCards, photo, flipped, clickedCard }) => {
  const flipCard = (id) => {
    const singleFlip = cards.map((item) => {
      if (item.id === id) {
        const changeFlip = {
          ...item,
          flipped: !item.flipped,
        };
        clickedCard(changeFlip);
        return changeFlip;
      }
      return item;
    });
    setCards(singleFlip);
  };

  // Change background Card
  let cardBackground;
  if (flipped) {
    cardBackground = {
      background: `url(${photo})`,
      backgroundSize: "70%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  } else {
    cardBackground = {
      background: "rgba(192, 192, 192, 0.596)",
    };
  }

  return (
    <div
      className={classes.card}
      onClick={() => flipCard(id)}
      style={cardBackground}
    ></div>
  );
};

export default Card;
