import React from "react";
import AddToCartButton from "./AddToCartButton";
import OrderCard from "./OrderCard";
import { Fade } from "react-awesome-reveal";
import ProductRating from "./ProductRating";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import Rating from "@material-ui/lab/Rating";

class Product extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Fade triggerOnce>
          <a href="/shop">Back to results</a>
          <Row>
            <Col>
              <Image src={this.props.photo} fluid></Image>
            </Col>
            <Col>
              <h1>{this.props.product_name} </h1>
              <ProductRating
                rating={this.props.rating}
                product_name={this.props.product_name}
                rating_count={this.props.rating_count}
              />
              <hr />
              <h2>${this.props.price}</h2>
              <hr />
              <h5>About this item</h5>
              <hr />
              <p>{this.props.longDescription}</p>
            </Col>
            <OrderCard
              price={this.props.price}
              quantity={this.props.quantity}
            />
          </Row>
        </Fade>
      </div>
    );
  }
}

export default Product;
