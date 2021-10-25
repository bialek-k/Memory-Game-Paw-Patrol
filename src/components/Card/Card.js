import React from "react";

import { PlaySound } from "../../helpers/sound";

import ClickSound from "../../audio/click.wav";

import classes from "../Card/Card.module.css";

const Card = (props) => {
  let clickArr = [];
  const showSecCard = () => {
    {
      props.volume && PlaySound(ClickSound, 0.6);
    }

    const id = props.id;
    const pressCard = props.cards[id];

    const flip = props.cards.map((card, id, arr) => {
      if (arr[id] === pressCard) {
        const newObj = {
          ...card,
          flipped: !pressCard.flipped,
        };
        props.setCardToCompare([...props.cardToCompare, newObj]);
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
