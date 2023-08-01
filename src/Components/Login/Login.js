import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  let history=useHistory()
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')
  let {firebase} =useContext(FirebaseContext)
  let handleLogin=((e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })
  })
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
           onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
           onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
