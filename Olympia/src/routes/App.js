//React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import Address from "../pages/Profile/Address";
import PaymentMethod from "../pages/PaymentMethod/PaymentMethod";
import Checkout from "../pages/Checkout/Checkout";
import paymentConfirmation from "../pages/PaymentConfirmation/PaymentConfirmation";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/address" component={Address} />
        <Route exact path="/payment-method" component={PaymentMethod} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/products/:category" component={Products} />
        <Route exact path="/product" component={ProductDetails} />
        <Route
          exact
          path="/payment-confirmation"
          component={paymentConfirmation}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
