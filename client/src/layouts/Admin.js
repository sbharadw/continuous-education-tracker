import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import roleTokenCall from "../components/role_permission";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import routes from "../routes"
import { useAuth0 } from "@auth0/auth0-react";
import sidebarImage from "assets/img/sidebar-3.jpg";

function Admin() {
  getrole()
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef();

  const { user, isAuthenticated } = useAuth0();

  //User's auth0 info.
  console.log(user); 

  const [myRole, setMyRole] = useState({})
  
 function getrole() { roleTokenCall.roleToken()
    .then((res) => {
      const data = res.permissions[0];
      console.log(data)
      setMyRole(data)
    })
    .catch(err => console.log(err))

  }

  // Popolating routes based on user's role
  const getRoutes = (routes) => {

    console.log(myRole)
   
    return(
      routes.map((prop, key) => {
      if (myRole === undefined) {
        return (
          null
        );
      } 
      if (myRole === prop.role) {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      }
      if (myRole === prop.role2) {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } 
      if (myRole === prop.role3) {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } 
    }))
  };

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);

    }
  }, [location]);
  
  return (

    isAuthenticated && (
      <>

        <div className="wrapper">
          <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />

          <div className="main-panel" ref={mainPanel}>

            <div className="content">
              <Switch>{getRoutes(routes)}</Switch>
              <AdminNavbar />
            </div>
          </div>
        </div>
        <Footer />

        <FixedPlugin
          hasImage={hasImage}
          setHasImage={() => setHasImage(!hasImage)}
          color={color}
          setColor={(color) => setColor(color)}
          image={image}
          setImage={(image) => setImage(image)}
        />


      </>
    )
  );
}

export default Admin;
