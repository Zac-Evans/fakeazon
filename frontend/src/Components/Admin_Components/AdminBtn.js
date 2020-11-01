import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class AdminBtn extends Component {

  render() {
    return (
      <Link className="mr-3" to="/admin">Admin</Link>
    );
  }
}
