import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';

export default class App extends Component {
    
  render() {
    return(

      <Router>

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/register" component={ Register }/>
          <Route path="/login" component={ Login }/>
        </Switch>

      </Router>

    )
  }

}
