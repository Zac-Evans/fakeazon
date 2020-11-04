import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.state = {
      value: 0,
    };
  }

  removeFromCart = () => {
    let addedToCart = () => {
      this.setState({ value: this.state.value + 1 });
    };
    //Check if logged in. If not, add to local storage cart
    if (!sessionStorage.getItem("userId")) {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      console.log(cart);
      let filteredCart = cart.filter((item) => item !== this.props.id);
      sessionStorage.setItem("cart", JSON.stringify(filteredCart));
      addedToCart();
      this.props.rerenderParentCallback();
    }

    //If logged in, store cart in database
    else {
      axios
        .get(
          `http://localhost:8000/get-cart/${sessionStorage.getItem("userId")}`
        )
        .then((res) => {
          axios.post("http://localhost:8000/add-to-cart", {
            product_id: this.props.id,
            // quantity:
            shopping_cart_id: res.data[0].id,
          });
        });
      addedToCart();
    }
  };

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
            Quantity: {this.props.quantity}
            {/* <Dropdown>
              <DropdownButton
                size="sm"
                menuAlign="right"
                title={this.props.quantity}
                id="dropdown-menu-align-right"
                variant="light"
              >
                <Dropdown.Item eventKey="1">1</Dropdown.Item>
                <Dropdown.Item eventKey="2">2</Dropdown.Item>
                <Dropdown.Item eventKey="3">3</Dropdown.Item>
                <Dropdown.Item eventKey="4">4</Dropdown.Item>
              </DropdownButton>
            </Dropdown> */}
            <Button
              onClick={() => {
                this.removeFromCart();
              }}
            >
              X Remove from cart
            </Button>
            {/* <RemoveFromCart /> */}
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
