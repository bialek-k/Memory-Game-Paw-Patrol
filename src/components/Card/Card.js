import React from "react";
import classes from "../Card/Card.module.css";

const Card = (props) => {
  // const showCard = (e, id) => {
  //   const index = parseInt(e.target.id);
  //   const flipCard = props.cards.map((item) => {
  //     if (item.id === index) {
  //       console.log("item", item);
  //       const changeCardSide = {
  //         ...item,
  //         flipped: !item.flipped,
  //       };
  //       return changeCardSide;
  //     }
  //     return item;
  //   });
  //   console.log(flipCard);
  //   props.setCards(flipCard);
  //   compareHandler(flipCard, id);
  // };
  const showSecCard = (e) => {
    const index = parseInt(e.target.id);
    console.log("klik", index);
    const flipCard = props.cards.map((item, id, arr) => {
      if (item.id === index) {
        const cardToFlip = arr[index];
        cardToFlip.flipped = !cardToFlip.flipped;
        console.log(cardToFlip);
        return cardToFlip;
      }
      return item;
    });
    props.setCards(flipCard);
    // compareHandler(flipCard, props.id);
    console.log("zmienione", flipCard);
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
      onClick={(e, id) => showSecCard(e, props.id)}
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
