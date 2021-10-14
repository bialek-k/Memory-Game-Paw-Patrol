import React from "react";
import classes from "../Card/Card.module.css";

const Card = (props) => {
  const showCard = (e, id) => {
    const flipCard = props.cards.map((item) => {
      console.log(props.cards);
      if (item.id === id) {
        console.log(item);
        const changeCardSide = {
          ...item,
          flipped: !item.flipped,
        };
        return changeCardSide;
      }
      return item;
    });
    props.setCards(flipCard);
    compareHandler(flipCard, id);
  };

  // Add Card to new Array for compare
  const compareHandler = (flipCard, id) => {
    let clickedCard = flipCard.filter((card) => card.id === id);
    props.setClickedCard([...clickedCard, ...props.clickedCard]);
  };

  // style of flipping card
  const cardBackStyle = {
    transform: "rotateY(180deg)",
    background: "#099eda",
    // background: "rgba(192, 192, 192, 0.596)",
    transition: "0.6s",
    backgroundSize: "25%",
    backgroundPosition: "bottom",
  };

  const cardFrontStyle = {
    background: `url(${props.photo})`,
    backgroundSize: "70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transform: "rotateY(0deg)",
    transition: "0.6s",
  };

  return (
    <div
      className={classes.card}
      style={props.flipped ? cardFrontStyle : cardBackStyle}
    >
      {!props.flipped && (
        <div
          className={classes.question}
          onClick={(e) => showCard(e, props.id)}
          id={props.id}
        >
          ?
        </div>
      )}
    </div>
  );
};

export default Card;
