import React from "react";
import CardBoard from "../CardBoard/CardBoard";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.container}>
      <CardBoard />
    </div>
  );
};

export default Main;
