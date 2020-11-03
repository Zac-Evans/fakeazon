import React, { Component } from "react";
import axios from "axios";

class CartCounter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.cart_count}</h1>
      </div>
    );
  }
}

export default CartCounter;
