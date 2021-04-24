// src/components/nav-bar.js

import React from "react";

//import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
   
      <nav className="navbar">
          <AuthNav />
      </nav>
  
  );
};

export default NavBar;