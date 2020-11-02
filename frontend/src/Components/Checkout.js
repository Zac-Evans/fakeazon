import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      shippingAddress: "",
      shippingAddress2: "",
      city: "",
      state: "",
      zip: "",
      cardNumber: "",
      expiration: "",
      securityCode: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      shippingAddress,
      shippingAddress2,
      city,
      state,
      zip,
      cardNumber,
      expiration,
      securityCode,
    } = this.state;
    let userId = sessionStorage.getItem("userId");
    axios
      .put(`http://localhost:8000/user/${userId}`, {
        shippingAddress: shippingAddress,
        shippingAddress2: shippingAddress2,
        city: city,
        state: state,
        zip: zip,
        cardNumber: cardNumber,
        expiration: expiration,
        securityCode: securityCode,
      }).then(() => {
          alert('Order was placed');
          return <Redirect push to="/"/>
      })
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="mt-5 mb-5 text-center">
          <h3>Ready to checkout?</h3>
        </div>

        <Form onSubmit={this.handleSubmit} className=" w-50 mx-auto">
          <h6 style={formStyle}>Enter your shipping information here.</h6>
          <Form.Group>
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              id="shippingAddress"
              onChange={this.handleChange}
              placeholder="123 circle lane"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Shipping Adress 2(optional)</Form.Label>
            <Form.Control
              id="shippingAddress2"
              onChange={this.handleChange}
              placeholder="123 circle lane"
            />
          </Form.Group>

          <Row className="mb-4">
            <Col>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  id="city"
                  onChange={this.handleChange}
                  placeholder="Memphis"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  id="state"
                  placeholder="Tennessee"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  id="zip"
                  onChange={this.handleChange}
                  placeholder="37501"
                />
              </Form.Group>
            </Col>
          </Row>
          <h6 style={formStyle}>Card Information</h6>
          <Row>
            <Col className="col-6">
              <Form.Group>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  id="cardNumber"
                  onChange={this.handleChange}
                  placeholder="1234-5678-9101-1121"
                />
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                  id="expiration"
                  onChange={this.handleChange}
                  placeholder="05-21"
                />
              </Form.Group>
            </Col>
            <Col className="col-3">
              <Form.Group>
                <Form.Label>Security Code</Form.Label>
                <Form.Control
                  id="securityCode"
                  onChange={this.handleChange}
                  placeholder="123"
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit">Place Order</Button>
        </Form>
      </div>
    );
  }
}

const formStyle = {
  textDecoration: "underline",
  textAlign: "center",
  marginBottom: "20px",
};
