import React from "react";
import "./Player.css";

export const Player = ({ time, setTime, timeOn, playerName, moves, round }) => {
  // Something is wrong with this

  // useEffect(() => {
  //   let interval = null;
  //   if (timeOn) {
  //     interval = setInterval(() => {
  //       setTime((prevTime) => prevTime + 10);
  //     }, 10);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [timeOn, setTime]);

  const getSec = () => Math.floor((time / 1000) % 60);

  return (
    <>
      <div className="container">
        <div className="player">{playerName}</div>
        <div className="round">
          <span>Round: {round}</span>
        </div>
        <div className="player-stats">
          <div>
            <span>Time: </span>
            <span></span>
            <span>{getSec()} sec</span>
          </div>
          <span>Moves: {moves}</span>
        </div>
      </div>
    </>
  );
};

export default Player;
