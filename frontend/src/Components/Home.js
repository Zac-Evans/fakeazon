import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/register">
          <Button>Register</Button>
        </Link>

        <Link to="/admin">
          <Button>Admin Page</Button>
        </Link>
      </div>
    );
  }
}
