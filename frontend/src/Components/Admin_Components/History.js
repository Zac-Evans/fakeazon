import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class History extends Component {
  render() {
    let id = JSON.parse(sessionStorage.getItem("userId"));

    return (
      <Link to="/order-history/user">
        <Button className="m-3">Order History</Button>
      </Link>
    );
  }
}
