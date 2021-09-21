import React from "react";
import classes from "../Card/Card.module.css";

const Card = ({ id, cards }) => {
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

    console.log(newState);
    // setCards(newState);
    // compareHandler(newState, id);
    // setTimeOn(true);
  };

  return <div className={classes.card} onClick={() => flipCard(id)}></div>;
};

export default Card;
