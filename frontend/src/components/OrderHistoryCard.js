import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

class OrderHistoryCard extends Component {
  render() {
    return ["Light"].map((variant, idx) => (
      <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <a href={`/order-history/order=${this.props.id}`}>
          <Card.Header>Order #{this.props.id}</Card.Header>
        </a>
        <Card.Body>
          <Card.Title>{this.props.product_name} </Card.Title>
          <Image src={this.props.photo} />
          <Card.Text>
            Quantity ordered: {this.props.quantity}
            <br></br>
            Price per unit: ${this.props.price}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }
}

export default OrderHistoryCard;
