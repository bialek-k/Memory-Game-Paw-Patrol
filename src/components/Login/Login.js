import React, { useState } from "react";
import "./Login.css";

const Login = ({ playerName, setLogin, setPlayerName, setStartGame }) => {
  const [error, setError] = useState("");

  const inputName = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  };

  const submitName = (e) => {
    e.preventDefault();
    if (playerName === "") {
      setError("ERROR");
      setTimeout(() => {
        setError("");
      }, 1800);
    } else {
      setLogin(false);
      setStartGame(true);
    }
  };

  const errorMsg = <div className="error">Please write your name</div>;

  const guestName = () => {
    setPlayerName("Great Player");
    setLogin(false);
    setStartGame(true);
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
