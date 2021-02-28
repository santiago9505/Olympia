//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Signup" component={SignUp} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
