import React from "react";
import classes from "../Card/Card.module.css";

const Card = (props) => {
  let clickArr = [];
  const showSecCard = () => {
    const id = props.id;
    const selectedCard = props.cards[id];

    const flip = props.cards.map((card, id, arr) => {
      if (arr[id] === selectedCard) {
        const newObj = {
          ...card,
          flipped: !selectedCard.flipped,
        };
        props.setCardToComapre([props.cardToComapre, newObj]);
        return newObj;
      }
      return card;
    });
    props.setCards(flip);
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
    pointerEvents: "none",
    transition: "0.6s",
  };

  return (
    <div
      className={classes.card}
      style={props.flipped ? cardFrontStyle : cardBackStyle}
      onClick={() => showSecCard()}
    >
      {!props.flipped && (
        <div className={classes.question} id={props.id}>
          ?
        </div>
      )}
    </div>
  );
};

export default Card;
