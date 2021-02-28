//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
<<<<<<< HEAD
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
=======
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const App = () => (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Login" component={Login}/>
    </Switch>
  </Layout>
>>>>>>> a6971776f660435d56f2937ff3c10a1a7da38679
  </BrowserRouter>
);

export default App;
