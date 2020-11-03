import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class CartItem extends Component {
  render() {
    return (
      <Fade triggerOnce>
        <Row className="align-items-center">
          {/* <Card className="productCard m-2" style={{ border: "none" }}> */}
          <Col lg="3" md="4" sm="5" xs="12">
            <a href={`/shop/${this.props.id}`}>
              <Card.Img
                key={this.props.id}
                variant="top"
                src={this.props.photo}
                className="productImage"
              />
            </a>
          </Col>
          <Col>
            <Card.Body className="text-center">
              <a href={`/shop/${this.props.id}`}>
                <Card.Title>{this.props.product_name}</Card.Title>
              </a>

              <h5>{this.props.shortDescription}</h5>
              <h5>${this.props.price}</h5>
            </Card.Body>
          </Col>
          <Col>
            Quantity:
            <Dropdown>
              <DropdownButton
                size="sm"
                menuAlign="right"
                title={this.props.quantity}
                id="dropdown-menu-align-right"
                variant="light"
                style={{ position: "relative" }}
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </Col>

          <hr />
          {/* </Card> */}
        </Row>
        <hr />
      </Fade>
    );
  }
}

export default CartItem;
