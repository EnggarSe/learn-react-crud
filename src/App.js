import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./srcApp/navigation/Navigation";
// import Main from "./main/Main";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Addbarang from "./srcApp/addbarang/Addbarang"
import Main from "./srcApp/main/Main"
import LihatBarang from "./srcApp/lihatBarang/LihatBarang"
import Navigasi from './srcSign/navigasi/Navigasi';
import Signin from './srcSign/signin/Signin';
import Signup from './srcSign/signup/Signup'


function App() {
   // const [login, setLogin] = useState(false);
   const login = JSON.parse(localStorage.getItem('isLogin')) === null ? false : JSON.parse(localStorage.getItem('isLogin'));

   // useEffect(() => {
   //    const loggedIn = JSON.parse(localStorage.getItem('isLogin')) === null ? false : JSON.parse(localStorage.getItem('isLogin'));
   //    setLogin(loggedIn)
   // }, [login])
   
   console.log(login);
   
   
   return (

      <Router>
         <Switch>
               
            <Route exact path="/">
               <Navigasi />
               <Signin />
            </Route>
            <Route exact path='/addBarang'>
               <Navigation />
               {login == false ? <Redirect to="/signin" /> : <Addbarang />}
            </Route>
            <Route exact path='/LihatBarang'>
               <Navigation />
               {login == false ? <Redirect to="/signin" /> : <LihatBarang />}

            </Route>
            <Route exact path='/Main'>
               <Navigation />
               {login == false ? <Redirect to="/signin" /> : <Main />}
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
