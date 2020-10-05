import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/All/Products';
import LoginGoogle from './components/LoginGoogle/LoginGoogle';
import Regi from './components/Regi/Regi';
import PrivateRoute from './components/PrivateRoute/Privateroute';
export const UserContext = createContext();
function App() {
  const [logedInUser , setLogedInUser] = useState({});
  return (
  
      

      <UserContext.Provider value={[logedInUser , setLogedInUser]}>
      <Router>
      <Header></Header>
          <Switch>
            <Route path="/home">
            <Products></Products>
            </Route>
            <Route path="/login">
            <LoginGoogle></LoginGoogle>
            </Route>
            <PrivateRoute path="/regi">
            <Regi></Regi>
            </PrivateRoute>
            <Route exact path="/">
            <Products></Products>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
