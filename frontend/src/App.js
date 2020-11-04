// import React from "react";
import CompleteOrderhistory from './Components/CompleteOrderHistory'

import React, { Component } from "react";
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
         <CompleteOrderhistory user_id="1"/>
        </Switch>
      </Router>
    );
  }
}
