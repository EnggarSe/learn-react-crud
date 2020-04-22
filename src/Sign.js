import React from 'react';
import Navigasi from './srcSign/navigasi/Navigasi';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from './srcSign/signin/Signin';
import Signup from './srcSign/signup/Signup'
import App from './App'


function Sign() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Navigasi />
               <Signin />
            </Route>
            <Route exact path="/signin">
               <Navigasi />
               <Signin />
            </Route>
            <Route exact path="/signup">
               <Navigasi />
               <Signup />
            </Route>
            <Route exact path="/app">
               <App />
            </Route>
         </Switch>
      </Router>
   )

}
export default Sign;
