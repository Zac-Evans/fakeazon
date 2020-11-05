import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
  render() {
    return (
      <Link to="/register">
        <Button className="m-2">Login/Register</Button>
      </Link>
    );
  }
}
