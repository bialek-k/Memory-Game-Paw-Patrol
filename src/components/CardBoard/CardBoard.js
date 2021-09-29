import React, { useState } from "react";
import Card from "../Card/Card";
import classes from "./CardBoard.module.css";

const CardBoard = (props) => {
  return <div className={classes.CardBoard}>{props.children}</div>;
};

export default CardBoard;
