import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddToCartButton extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" className="m-1">
          Add to Cart
        </Button>
      </div>
    );
  }
}

export default AddToCartButton;
