import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Fade } from "react-awesome-reveal";
import axios from "axios";

class CartItem extends Component {
  constructor(props) {
    super(props);
    // this.removeFromCart = this.removeFromCart.bind(this);
    this.state = {
      photo: this.props.photo,
      id: this.props.id,
      product_name: this.props.product_name,
      price: this.props.price,
      quantity: this.props.quantity,
    };
  }
  clearState = () => {
    this.setState({
      photo: "",
      id: "",
      product_name: "",
      price: "",
      quantity: "",
    });
  };
  removeFromCart = () => {
    //Check if logged in. If not, add to local storage cart
    if (!sessionStorage.getItem("userId")) {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let filteredCart = cart.filter((item) => item !== this.props.id);
      sessionStorage.setItem("cart", JSON.stringify(filteredCart));
      this.clearState();
      // this.props.rerenderParentCallback();
    }

    //If logged in, store cart in database
    else {
      axios
        .get(
          `https://e-commerce-project-2020.herokuapp.com/get-cart/${sessionStorage.getItem(
            "userId"
          )}`
        )
        .then((res) => {
          console.log(this.props.id);
          axios
            .delete(
              `https://e-commerce-project-2020.herokuapp.com/delete-from-cart/${res.data[0].id}/${this.props.id}`
            )
            .catch((error) => {
              console.log("error");
            });
          this.clearState();
        });
    }
  };

  render() {
    return (
      <Fade triggerOnce>
        {this.state.product_name && (
          <div>
            <Row className="align-items-center ">
              {/* <Card className="productCard m-2" style={{ border: "none" }}> */}
              <Col>
                <a href={`/shop/${this.state.id}`}>
                  <Card.Img
                    key={this.state.id}
                    variant="top"
                    src={this.state.photo}
                    className="productImage"
                  />
                </a>
              </Col>
              <Col>
                <Card.Body className="text-center">
                  <a href={`/shop/${this.state.id}`}>
                    <Card.Title>{this.state.product_name}</Card.Title>
                  </a>

                  <h5>${this.state.price}</h5>
                </Card.Body>
              </Col>
              <Col className="text-center">
                <h6>Quantity: {this.state.quantity}</h6>
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
                  style={{ minWidth: "90px" }}
                  className="btn-sm"
                  onClick={() => {
                    this.removeFromCart();
                  }}
                >
                  <b>X Remove</b>
                </Button>
                {/* <RemoveFromCart /> */}
              </Col>

              <hr />
              {/* </Card> */}
            </Row>
            <hr />
          </div>
        )}
      </Fade>
    );
  }
}

export default CartItem;
