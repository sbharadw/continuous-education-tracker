// src/components/nav-bar.js

import React from "react";
import logo from '../assets/img/reactlogo.png'; 
//import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
 
      <nav className="navbar">
        <img src={logo} style={{width:100, marginTop: -7}} alt="Logo" />
        
       
       <div className="logo d-flex align-items-center justify-content-start">
       <h3 className="simple-text text-dark">CONTINUOUS EDUCATION TRACKER</h3> 
        </div>
          <AuthNav />

      </nav>
  
  );
};

export default NavBar;