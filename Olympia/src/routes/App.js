//React
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile/Profile';

const App = () => (
  <BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/profile" component={Profile}/>
    </Switch>
  </Layout>
  </BrowserRouter>
);

export default App;