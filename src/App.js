import React,{useEffect,useContext} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/context'

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  let {setUser}=useContext(AuthContext)
  let {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      // console.log(user,'haaaaa')
      setUser(user)
      
    })
  })
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Router>
    </div>
  );
}

export default App;
