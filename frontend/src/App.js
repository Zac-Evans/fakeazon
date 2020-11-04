import React, { Component } from "react";
import Detailedhistory from './Components/Detailedhistory'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Admin from "./Components/Admin_Components/Admin";
import NewProduct from "./Components/Admin_Components/NewProduct";
import UpdateProduct from "./Components/Admin_Components/UpdateProduct";
import Delete from "./Components/Admin_Components/Delete";
import ShopContainer from "./Components/ShopContainer";
import Checkout from "./Components/Checkout";
import CompleteOrderhistory from "./Components/CompleteOrderHistory"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ShopContainer} />
           
          <Route path="/register" component={ Register }/>
          <Route path="/login" component={ Login }/>
          <Route exact path="/admin" component={ Admin }/>
          <Route path="/admin/create" component={ NewProduct }/>
          <Route path="/admin/update" component={ UpdateProduct }/>
          <Route path="/admin/delete" component={ Delete }/>
          <Route path="/shop" component={ ShopContainer }/>
          <Route path="/checkout" component={ Checkout }/>
          <Route path="/checkout" component={ Checkout }/>
          <Route path="/order-history/user" component={ CompleteOrderhistory }/>
          <Route path="/order-history/order=" component={ CompleteOrderhistory }/>

        </Switch>
      </Router>
    );
  }
}
