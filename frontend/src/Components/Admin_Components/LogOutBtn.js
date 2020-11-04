import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LogOut extends Component {
  logOut = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.reload(false);
  };

  render() {
    return (
      <Button className="m-3" onClick={this.logOut}>
        Logout
      </Button>
    );
  }
}
