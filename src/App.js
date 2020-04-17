import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation/Navigation";
// import Main from "./main/Main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Addbarang from "./addbarang/Addbarang"
import Main from "./main/Main"
import LiharBarang from "./lihatBarang/LihatBarang"

function App() {
   return (

      <Router>
         <Navigation />
         <Switch>
            <Route path='/addBarang'>
               <Addbarang />
            </Route>
            <Route path='/Main'>
               <Main/>
            </Route>
            <Route path = '/LihatBarang'>
               <LiharBarang/>
            </Route>
            
         </Switch>

      </Router>


   );
}

export default App;
