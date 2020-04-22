import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Addbarang from "./Addbarang"
import Main from "./Main"
import LihatBarang from "./LihatBarang"
import Signin from './Sign'
import Register from './Register'
import PrivateRoute from "./components/Privateroute"


function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component ={Signin}/>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Register} />
            <PrivateRoute exact path ='/Main' component={Main}/>
            <PrivateRoute exact path ='/Addbarang' component={Addbarang}/>
            <PrivateRoute exact path ='/LihatBarang' component ={LihatBarang}/>
         </Switch>
      </Router>
   );
}

export default App;
