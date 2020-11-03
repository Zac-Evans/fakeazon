import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AdminBtn extends Component {
  render() {
    return (
      <Link className="m-3" to="/admin">
        Admin
      </Link>
    );
  }
}
