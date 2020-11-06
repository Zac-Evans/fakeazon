import React, { Component } from "react";

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
