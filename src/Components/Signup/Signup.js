import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/context";
import { useHistory } from "react-router-dom";

export default function Signup() {
  let history = useHistory();
  let [Username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let { firebase } = useContext(FirebaseContext);
  let [message, setMessage] = useState("");
  let validation = (e) => {
    setUsername(e.target.value);
    if (Username.length < 5) {
      setMessage("Minimum  6 letters");
    } else {
      setMessage("");
    }
  };
  let isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return passwordRegex.test(password);
  };
  let submitHandle = (e) => {
    e.preventDefault();
    if (!email || !password || !Username || !phone) {
      alert("Please provide all required information.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: Username,
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .add({
                id: result.user.uid,
                Username: Username,
                phone: phone,
              })
              .then(() => {
                history.push("/login");
              })
              .catch((error) => {
                alert("Input the values");
              });
          });
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandle}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e) => validation(e)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          {message && <p>{message}</p>}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => history.push("/Login")}>Login</a>
      </div>
    </div>
  );
}
