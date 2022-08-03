import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));

    //firebase signin
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
         navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    //firebase register create a new user using email pass
  };

  return (
    <div className=" login ">
      <NavLink to="/">
        <img
          className="login__Image"
          src={require("./image/best-deal.png")}
          alt="no able"
        />
      </NavLink>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="loginsign__button ">
            Sign In
          </button>
        </form>
        <p>
          Please review our Privacy Notice, which also governs your visit to
          Amazon.in, to understand our practices. The personal information /
          data provided to us by you during the course of usage of bestdeal.in{" "}
        </p>
        <button onClick={register} className="loginsign__createacc">
          Create a new account
        </button>
      </div>
    </div>
  );
}

export default Login;
