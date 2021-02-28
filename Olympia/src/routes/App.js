//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login/Login";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
