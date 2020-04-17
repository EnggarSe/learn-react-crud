import React, { Component, Fragment } from 'react'
import "./main.css"


export default class Main extends Component {
   render() {
      return (
         <Fragment>
            <div className="jumbotron p-0 animated zoomIn">
               <div className="view overlay rounded-top">
                  <img src="https://images.pexels.com/photos/793237/pexels-photo-793237.jpeg?cs=srgb&dl=black-background-colors-food-food-photography-793237.jpg&fm=jpg" className="img-fluid" alt="Sample" />
                  <a href="/">
                     <div className="mask rgba-white-slight"></div>
                  </a>
               </div>
            </div>
         </Fragment>
      )
   }
}
