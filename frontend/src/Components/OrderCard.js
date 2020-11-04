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
          <AddToCartButton
            key={this.props.id}
            id={this.props.id}
            product_name={this.props.product_name}
            shortDescription={this.props.shortDescription}
            longDescription={this.props.longDescription}
            photo={this.props.photo}
            price={this.props.price}
            quantity={this.props.quantity}
            rating={this.props.rating}
            rating_count={this.props.rating_count}
            rerenderParentCallback={this.props.rerenderParentCallback}
          />
        </Card>
      </Col>
    );
  }
}

export default OrderCard;
