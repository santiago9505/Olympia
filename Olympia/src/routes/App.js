//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Address from "../pages/Profile/Address";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/address" component={Address} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
