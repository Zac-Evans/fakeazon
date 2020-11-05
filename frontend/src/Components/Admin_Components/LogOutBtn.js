import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LogOut extends Component {
  logOut = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload(false);
  };

  render() {
    return (
      <Link className="m-2" to="/">
        <Button onClick={this.logOut}>Logout</Button>
      </Link>
    );
  }
}
