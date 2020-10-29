import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";
import ProductRating from "./ProductRating";
import { BrowserRouter as Router, Link } from "react-router-dom";

class ProductCard extends Component {
  render() {
    console.log(this.props.rating_count);

    return (
      <Col lg="3" md="4" sm="5" xs="12">
        <Fade triggerOnce>
          <Card className="productCard m-2" style={{ border: "none" }}>
            <Link to={`/shop/${this.props.id}`}>
              <Card.Img
                key={this.props.id}
                variant="top"
                src={this.props.photo}
                className="productImage"
              />
            </Link>

            <Card.Body className="text-center">
              <Link to={`/shop/${this.props.id}`}>
                <Card.Title>{this.props.product_name}</Card.Title>
              </Link>

              <Card.Text>{this.props.shortDescription}</Card.Text>
              <div>${this.props.price}</div>

              <ProductRating
                id={this.props.id}
                rating={this.props.rating}
                product_name={this.props.product_name}
                rating_count={this.props.rating_count}
              />

              <AddToCartButton />
            </Card.Body>
            <hr />
          </Card>
        </Fade>
      </Col>
    );
  }
}

export default ProductCard;
