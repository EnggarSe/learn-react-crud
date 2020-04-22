import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./srcApp/navigation/Navigation";
// import Main from "./main/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addbarang from "./srcApp/addbarang/Addbarang"
import Main from "./srcApp/main/Main"
import LihatBarang from "./srcApp/lihatBarang/LihatBarang"
import Navigasi from './srcSign/navigasi/Navigasi';
import Signin from './srcSign/signin/Signin';
import Signup from './srcSign/signup/Signup'

function App() {
   return (

      <Router>
         <Switch>
            <Route exact path="/">
               <Navigasi />
               <Signin />
            </Route>
            <Route exact path='/addBarang'>
               <Navigation />
               <Addbarang />
            </Route>
            <Route exact path='/LihatBarang'>
               <Navigation />
               <LihatBarang />
            </Route>
            <Route exact path='/Main'>
               <Navigation />
               <Main />
            </Route>
            <Route exact path="/signin">
               <Navigasi />
               <Signin />
            </Route>
            <Route exact path="/signup">
               <Navigasi />
               <Signup />
            </Route>
         </Switch>
      </Router>


   );
}

export default App;
