import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./srcApp/navigation/Navigation";
// import Main from "./main/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addbarang from "./srcApp/addbarang/Addbarang"
import Main from "./srcApp/main/Main"
import LihatBarang from "./srcApp/lihatBarang/LihatBarang"

function App() {
   return (

      <Router>
         <Navigation />
         <Switch>
            <Route exact path='/'>
               <Main />
            </Route>
            <Route exact path='/addBarang'>
               <Addbarang />
            </Route>
            <Route exact path='/LihatBarang'>
               <LihatBarang />
            </Route>
            <Route exact path='/Main'>
               <Main />
            </Route>


         </Switch>

      </Router>


   );
}

export default App;
