import React, {Fragment} from 'react'
import styled from 'styled-components';


const NavStyle = styled.nav`
   display : flex;
   justify-content : center;
`;

const Anchor = styled.a`
   color : white !important;
   font-size : 26px !important;
`;


function Navigasi() {
   return (
      <Fragment>
         <div className="container-fluid">
            <NavStyle className="mb-1 navbar navbar-expand-lg navbar-dark dark lighten-1">
               <Anchor className="navbar-brand animated pulse infinite" href="/">Shopping List</Anchor>
            </NavStyle>
         </div>
      </Fragment>
   )
}

export default Navigasi;

