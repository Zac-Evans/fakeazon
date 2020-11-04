import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AdminBtn extends Component {
  render() {
    return (
      <Link className="m-3" to="/admin">
        <Button>Admin</Button>
      </Link>
    );
  }
}
