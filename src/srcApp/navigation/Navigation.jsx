import React, { Component } from "react";
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './navigation.css'
class Navigation extends Component {

   

   render() {
      return (
         <div className="container-fluid">
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark dark lighten-1">
               <a className="navbar-brand animated pulse infinite" href="/">Shopping List</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                  aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <button type="button" className="btn btn-light block" id = "addBarang">
                           <Link to="/addBarang" style ={{color:"black"}}>Create List</Link>
                        </button>
                     </li>
                  </ul>
                  <ul className="navbar-nav ml-auto" id ="leftMenu">
                     <li className="nav-item">
                           <Link to ="/Main" style ={{color:"white"}}>Home</Link> 
                     </li>
                     <li className="nav-item"> 
                           <Link to ="/LihatBarang" style ={{color:"white"}}>Lihat</Link>
                     </li>
                  </ul>
                  <Dropdown>
                     <Dropdown.Toggle variant="black" id="dropdown-basic">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0"
                           alt="avatar" height="35" />
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
            </nav>
         </div>
      );
   }
}

export default Navigation;