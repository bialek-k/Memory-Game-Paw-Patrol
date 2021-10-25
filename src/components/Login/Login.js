import React, { useState } from "react";
import { PlaySound } from "../../helpers/sound";
import ClickKey from "../../audio/clickKey.wav";

import classes from "./Login.module.css";

const Login = (props) => {
  const [error, setError] = useState("");

  const inputName = (e) => {
    e.preventDefault();
    PlaySound(ClickKey, 0.6);
    props.setPlayerName(e.target.value);
  };

  const submitName = (e) => {
    e.preventDefault();
    if (props.playerName === "") {
      setError("ERROR");
      setTimeout(() => {
        setError("");
      }, 1800);
    } else {
      props.setLogin(false);
    }
  };

  const errorMsg = <div className={classes.error}>Please write your name</div>;

  const guestName = () => {
    props.setPlayerName("Great Player");
    props.setLogin(false);
  };

  return (
    <div className={classes.loginWrapper}>
      <form className={classes.loginModal} onSubmit={submitName}>
        <p>Write your name</p>
        {error ? errorMsg : null}
        <input type="text" onChange={inputName} />
        <button type="submit" className="play">
          Play!
        </button>
        <h3 className={classes.loginGuest} onClick={guestName}>
          or play as a guest
        </h3>
      </form>
    </div>
  );
};

export default Login;
