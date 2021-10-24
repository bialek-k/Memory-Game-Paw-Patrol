import React, { useEffect } from "react";
import "./Player.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

export const Player = (props) => {
  const volumeHandler = () => {
    props.setVolume((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        <div className="volume">
          <FontAwesomeIcon
            icon={props.volume ? faVolumeUp : faVolumeOff}
            style={!props.volume && { color: "rgba(255,255,255,0.7)" }}
            onClick={volumeHandler}
          />
        </div>
        <div className="player">{props.playerName}</div>
        <div className="round">
          <span>Round: {props.round}</span>
        </div>
        <div className="player-stats">
          <span>Moves: {props.moves}</span>
        </div>
      </div>
    </>
  );
};

export default Player;
