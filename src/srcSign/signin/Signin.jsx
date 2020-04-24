import React, { Fragment } from 'react';
import { Jumbotron, Button, Form } from 'react-bootstrap'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Formik } from 'formik';
import { useHistory } from "react-router-dom";

// import FormSignup from '../formSignup/FormSignup'

const StyleDivLeft = styled.div`
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
const StyledDivRight = styled.div`
   
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
      .left-div{
         margin-left : 0;
      }
    }

`;

export default function Signin() {
   const history = useHistory();
   return (
      <Fragment>
         <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 ">
               <div className="container-fluid">
                  <StyleDivLeft className="left-div" >
                     <Jumbotron className="Jumbo">
                        <div className="image">
                           <img src="https://1.bp.blogspot.com/-pGDZrLCabFE/UGqrUMp3sfI/AAAAAAAAFDI/PDWAWCrQqTU/s1600/Dark-Red-Shining-Strawberries-HD-Wallpaper--Vvallpaper.Net.jpg" alt="fruit" style={{ maxWidth: "60%" }} />
                        </div>
                        <div className="Signtext">
                           <h2 className="fruit">Belum Punya Akun ?</h2>
                        </div>
                        <div className="hr-Horizontal">

                        </div>


                        <div className="buttonSign">
                           <Link to="/signup">
                              <Button variant="dark">Daftar</Button>
                           </Link>
                        </div>

                     </Jumbotron>
                  </StyleDivLeft>
               </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
               <StyledDivRight>
                  <Formik
                     initialValues={{
                        username: "",
                        password: "",
                     }}
                     validate={(values) => {
                        const errors = {};
                        if (values.username === "") {
                           errors.username = "Required";
                        } else if (values.password.length < 6) {
                           errors.password = "Minimum password 6 character";
                        }
                        return errors;
                     }}
                     onSubmit={async (values) => {
                        const url = "https://5e9fca5511b078001679cd41.mockapi.io/user"
                        const response = await fetch(url);
                        const result = await response.json();

                        const existingUser = result.find(
                           (element) => element.username === values.username
                        );

                        if (existingUser === undefined) {
                           alert("user tidak ditemukan");
                        } else if (
                           existingUser.password !== values.password ||
                           existingUser.username !== values.username
                        ) {
                           alert("username/password salah");
                        } else {
                           localStorage.setItem("userData", JSON.stringify(existingUser));
                           localStorage.setItem("isLogin", true)
                           alert(
                              `selamat datang kembali ${existingUser.username}`
                           );
                           history.push("/Main");



                        }
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
                                 <h1>Login</h1>
                              </div>
                              <Form.Group >
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
                              <div className="button-submit">
                                 <Button variant="dark" type="submit">Login</Button>
                              </div>
                           </Form>
                        );
                     }}
                  </Formik>
               </StyledDivRight>
            </div>
         </div>
      </Fragment>
   )
}
