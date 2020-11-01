import React, { Component } from "react";
import AddToCartButton from "./AddToCartButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class OrderCard extends Component {
  render() {
    return (
      <Col>
        <Card className="p-3">
          <h2>${this.props.price}</h2>
          <p>FREE delivery</p>
          {this.props.quantity ? (
            <div>
              <h5>In stock.</h5>
              <p className="text-danger">
                <b>
                  Only {this.props.quantity} left in stock-
                  <br />
                  order soon.
                </b>
              </p>
            </div>
          ) : (
            <h5>Out of stock.</h5>
          )}
          <AddToCartButton />
        </Card>
      </Col>
    );
  }
}

export default OrderCard;