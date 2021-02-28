//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
//Components
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 34da3f3f6a269429150804aa4f84661ddaaece77
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
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
<<<<<<< HEAD
=======
=======
=======

>>>>>>> ab330e70ae7669c8523813c0947ac600d775c1e3
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
  import SignUp from "../pages/SignUp";

const App = () => (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Signup" component={SignUp} />
      <Route exact path="/Login" component={Login}/>
    </Switch>
  </Layout>
<<<<<<< HEAD
>>>>>>> a6971776f660435d56f2937ff3c10a1a7da38679
=======
>>>>>>> ab330e70ae7669c8523813c0947ac600d775c1e3
>>>>>>> 34da3f3f6a269429150804aa4f84661ddaaece77
  </BrowserRouter>
);

export default App;
