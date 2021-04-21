import React from "react";
//import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import ProtectedRoute from "./auth/protected-route";

//import Loading from "./components/Loading";

import Loading from "./components/loading";
import NavBar from "./components/nav-bar";


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";


const App = () => {

    const { isLoading } = useAuth0();

    if (isLoading) {
      return <Loading />;
    }

    return (
    <>

        <NavBar />
        <AdminLayout />

    </>


    )
    
    
}

export default App;

// <Route path="/" exact component={Home} />
//<div div className="container flex-grow-1">
//<div id="app" className="d-flex flex-column h-100">
// <Redirect from="/" to="/admin/dashboard" />
//<ProtectedRoute path="/profile" component={Profile} />
//<ProtectedRoute path="/external-api" component={ExternalApi} />
//<Route path="/admin" render={(props) => <AdminLayout {...props} />} />


/*

return (

    <Router>

            <Switch>
            <Route path="/" exact component={NavBar} />
            </Switch>
               
    </Router>
    
    )


*/