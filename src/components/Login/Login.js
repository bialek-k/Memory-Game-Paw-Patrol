import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [error, setError] = useState("");

  const inputName = (e) => {
    e.preventDefault();
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
      // props.setStartGame(true);
    }
  };

  const errorMsg = <div className="error">Please write your name</div>;

  const guestName = () => {
    props.setPlayerName("Great Player");
    props.setLogin(false);
    // props.setStartGame(true);
  };

  return (
    <div className="login-wrapper">
      <form className="login-modal" onSubmit={submitName}>
        <p>Write your name</p>
        {error ? errorMsg : null}
        <input type="text" onChange={inputName} />
        <button type="submit" className="play">
          Play!
        </button>
        <h3 className="login-guest" onClick={guestName}>
          or play as a guest
        </h3>
      </form>
    </div>
  );
};

export default Login;
