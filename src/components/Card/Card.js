import React from "react";
import classes from "../Card/Card.module.css";

const Card = (props) => {
  const showCard = (id) => {
    const flipCard = props.cards.map((item) => {
      if (item.id === id) {
        const changeCardSide = {
          ...item,
          flipped: !item.flipped,
        };
        props.flippedCard(changeCardSide);
        return changeCardSide;
      }
      return item;
    });
    props.setCards(flipCard);
  };

  // Change background Card
  let cardBackground;
  if (props.flipped) {
    cardBackground = {
      background: `url(${props.photo})`,
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
      onClick={() => showCard(props.id)}
      style={cardBackground}
    ></div>
  );
};

export default Card;
