import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddToCartButton extends Component {

  addItem = (e) => {
    e.preventDefault();
    cartItems.push(this.props.name);
  }

  array = () => { sessionStorage.setItem('cartItems', JSON.stringify(cartItems)) }

  render() {
    return (
      <div>
        <Button onClick={this.addItem} variant="primary" className="m-1">
          Add to Cart
        </Button>

        <Button onClick={this.array} variant="primary" className="m-1">
          Show Cart
        </Button>
      </div>
    );
  }
}

const cartItems = [];

export default AddToCartButton;
