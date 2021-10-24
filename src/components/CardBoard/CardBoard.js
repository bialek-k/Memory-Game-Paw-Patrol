import React, { useEffect } from "react";
import classes from "./CardBoard.module.css";

import { PlaySound } from "../../helpers/sound";
import NewGameSound from "../../audio/newgame.wav";

import Card from "../Card/Card";

const CardBoard = (props) => {
  useEffect(() => {
    {
      props.volume && PlaySound(NewGameSound, 0.5);
    }
  }, []);

  const cardsOnTable = props.cards.map((card, idx) => {
    return (
      <Card
        id={idx}
        key={idx}
        cards={props.cards}
        setCards={props.setCards}
        photo={card.photo}
        flipped={card.flipped}
        cardToCompare={props.cardToCompare}
        setCardToCompare={props.setCardToCompare}
        frontCards={props.frontCards}
        setFrontCards={props.setFrontCards}
        volume={props.volume}
      />
    );
  });

  return <div className={classes.CardBoard}>{cardsOnTable}</div>;
};

export default CardBoard;
