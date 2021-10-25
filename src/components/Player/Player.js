import React from "react";
import classes from "./Player.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

export const Player = (props) => {
  const volumeHandler = () => {
    props.setVolume((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.volume}>
          <FontAwesomeIcon
            icon={props.volume ? faVolumeUp : faVolumeOff}
            style={!props.volume && { color: "rgba(255,255,255,0.7)" }}
            onClick={volumeHandler}
          />
        </div>
        <div className={classes.player}>{props.playerName}</div>
        <div className={classes.round}>
          <span>Round: {props.round}</span>
        </div>
        <div className={classes.playerStats}>
          <span>Moves: {props.moves}</span>
        </div>
      </div>
    </>
  );
};

export default Player;
