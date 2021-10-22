import React, { useEffect } from "react";
import "./Player.css";

export const Player = ({ time, setTime, timeOn, playerName, moves, round }) => {
  // Something is wrong with this

  const getSec = () => Math.floor((time / 1000) % 60);

  return (
    <>
      <div className="container">
        <div className="player">{playerName}</div>
        <div className="round">
          <span>Round: {round}</span>
        </div>
        <div className="player-stats">
          <span>Moves: {moves}</span>
        </div>
      </div>
    </>
  );
};

export default Player;
