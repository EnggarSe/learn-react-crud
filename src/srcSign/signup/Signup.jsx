import React, { Fragment, useEffect, useState } from 'react';
import { Jumbotron, Button, Form } from 'react-bootstrap'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Formik } from 'formik';




const StyleDiv = styled.div`
   display : flex;
   justify-content : center;
   color : white ;
   margin-left : 0%;
   .Jumbo {
      background-color : black !important;
   }
  
   .hr-Horizontal {    
      display : flex !important;
      justify-content : center !important;
      width: 100%;
      border-top: 2px solid;
      color: white;
      
   }
   .buttonSign {
      display : flex !important;
      justify-content : center !important;
      margin-top : 10px;
   }
   .Signtext{
      display : flex !important;
      justify-content : center !important;
      margin-top : 10px;
   }
   .image {
      display : flex !important;
      justify-content : center !important;   
   }
`;
const StyledDiv = styled.div`
   
   .input{
      margin : 18% 0 0 10%;
      width : 70%;
   }
   .Login-text{
      display : flex !important;
      justify-content :center !important;
      color : white ;
      margin-bottom : 10px;
   }
   .button-submit{
      display : flex !important;
      justify-content :center !important;
   }

   @media screen and (max-width: 991px) {
      .input{
      margin : -5% 0 0 15%;
      width : 70%;
    }
   }
`;



export default function Signup() {
   const url = "https://5e9fca5511b078001679cd41.mockapi.io/user"
   

   const [data, setData] = useState([])

   useEffect(() => {
      const getUserCek = async(username)=>{
         const response = await fetch(url);
         const result = await response.json();
         setData(result)
      }
      getUserCek(); 

   },[]) 

  
   return (
      <Fragment>
         <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
               <div className="container-fluid">
                  <StyleDiv >
                     <Jumbotron className="Jumbo">
                        <div className="image">
                           <img src="https://1.bp.blogspot.com/-pGDZrLCabFE/UGqrUMp3sfI/AAAAAAAAFDI/PDWAWCrQqTU/s1600/Dark-Red-Shining-Strawberries-HD-Wallpaper--Vvallpaper.Net.jpg" alt="fruit" style={{ maxWidth: "60%" }} />
                        </div>
                        <div className="Signtext">
                           <h2 className="fruit">Sudah Punya Akun ? ?</h2>
                        </div>
                        <div className="hr-Horizontal">
                        </div>
                        <p >
                           <Link to="/signin">
                              <div className="buttonSign">
                                 <Button variant="dark">Login</Button>
                              </div>
                           </Link>
                        </p>
                     </Jumbotron>
                  </StyleDiv>
               </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
               <StyledDiv>
                  <Formik
                     initialValues={{
                        email: "",
                        username: "",
                        password: "",
                        confirmPassword: "",
                     }}
                     validate={(values) => {
                        const errors = {};
                        const filterData = data.find(element => {
                           return element.username === values.username && element
                        });
                        if (values.email === "") {
                           errors.email = "Required";
                        } else if (
                           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.email
                           )
                        ) {
                           errors.email = "Invalid email address";
                        } else if (values.password.length < 6) {
                           errors.password =
                              "Minimum password 6 character";
                        } else if (values.username.length < 6) {
                           errors.username =
                              "Minimum username 6 character";
                        } else if (values.password !== values.confirmPassword) {
                           errors.confirmPassword =
                              "Password Tidak Sama"
                        } 
                        else if (filterData!==undefined){
                           errors.username = 
                              "Username sudah terdaftar"
                        }

                       
                        

                        return errors;
                     }}
                     onSubmit={(values) => {
                        
                        const options = {
                           headers: {
                              "Content-Type": "application/json",
                           },
                           body: JSON.stringify(values),
                           method: "POST",
                        };

                        fetch(url, options)
                           .then((response) => {
                              return response.json();
                           })
                           .then((result) => {
                              alert("register successfully");

                           });
                     }}
                  >
                     {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                     }) => {
                        return (
                           <Form className="input" onSubmit={handleSubmit}>
                              <div className="Login-text">
                                 <h1>Daftar</h1>
                              </div>
                              <Form.Group>
                                 <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                 />
                                 <span
                                    style={{
                                       color: "yellow",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.email &&
                                       touched.email &&
                                       errors.email}
                                 </span>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                 />
                                 <span
                                    style={{
                                       color: "yellow",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.username &&
                                       touched.username &&
                                       errors.username}
                                 </span>
                              </Form.Group>
                              <Form.Group>
                                 <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                 />
                                 <span
                                    style={{
                                       color: "yellow",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.password &&
                                       touched.password &&
                                       errors.password}
                                 </span>
                              </Form.Group>
                              <Form.Group controlId="formBasicPassword">
                                 <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                 />
                                 <span
                                    style={{
                                       color: "yellow",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.confirmPassword &&
                                       touched.confirmPassword &&
                                       errors.confirmPassword}
                                 </span>
                              </Form.Group>
                              <div className="button-submit">
                                 <Button variant="dark" type="submit" disabled={isSubmitting}>Daftar</Button>
                              </div>
                           </Form>
                        );
                     }}

                  </Formik>
               </StyledDiv>
            </div>
         </div>
      </Fragment>
   )
}
