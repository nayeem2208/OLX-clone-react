import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
 import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/context';
import Post from './store/postContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext); 
  const {user} = useContext(AuthContext); 
  
  const {firebase} = useContext(FirebaseContext)
  console.log(setUser,'kkkkkk')
  useEffect(() => {
   firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
   })
  }); 
  // Add user as a dependency to avoid excessive re-renders

  return (
    <div>

    <Post>
      <Router>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create">
          {user?<Create />:<Login/>}
          
        </Route>
        <Route exact path="/view">
          <View />
        </Route>
      </Router>
    </Post>

    </div>
  );
}

export default App;