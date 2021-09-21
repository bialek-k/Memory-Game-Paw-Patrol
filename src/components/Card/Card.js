import React from "react";
import classes from "../Card/Card.module.css";

export const Card = (props) => {
  return <div className={classes.card}>{props.id}</div>;
};

export default Card;
