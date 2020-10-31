//return complete order history for specific user

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class OrderHistoryCard extends Component {
  render() {
    return (
        [
            'Light',
          ].map((variant, idx) => (
            <Card
              bg={variant.toLowerCase()}
              key={idx}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Order #{this.props.id}</Card.Header>
              <Card.Body>
          <Card.Title>{this.props.product_name} </Card.Title>
                <Card.Text>
                  Quantity ordered: {this.props.quantity}
                  <br></br>
                  Price per unit: ${this.props.price}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
    )
  }
}

export default OrderHistoryCard;
