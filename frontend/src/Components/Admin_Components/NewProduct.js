import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shortDescription: "",
      longDescription: "",
      photo: "",
      price: "",
      quantity: "",
      validProduct: false,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      shortDescription,
      longDescription,
      photo,
      price,
      quantity,
    } = this.state;

    axios
      .post(
        "https://e-commerce-project-2020.herokuapp.com/inventory/add_product",
        {
          product_name: name,
          shortDescription: shortDescription,
          longDescription: longDescription,
          photo: photo,
          price: price,
          quantity: quantity,
        }
      )
      .then((res) => {
        this.setState({ validProduct: true });
        console.log(res);
      });
  };

  render() {
    if (this.state.validProduct) {
      return <Redirect push to="/admin" />;
    } else {
      return (
        <div>
          <div className="mx-auto w-50 m-4">
            <Link style={{ textDecoration: "underline" }} to="/admin">
              Back
            </Link>
            <h1 style={{ textDecoration: "underline" }} className="text-center">
              Create A New Product
            </h1>

            <Form onSubmit={this.handleSubmit} className="mt-5">
              <Form.Group>
                <Form.Label>Enter new product name</Form.Label>
                <Form.Control onChange={this.handleChange} id="name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter product short description</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  id="shortDescription"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter product long description</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  id="longDescription"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter product URL or select file</Form.Label>
                <Form.Control onChange={this.handleChange} id="photo" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter product price</Form.Label>
                <Form.Control onChange={this.handleChange} id="price" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter product quantity</Form.Label>
                <Form.Control onChange={this.handleChange} id="quantity" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button className="mr-3" variant="primary" type="submit">
                  Submit
                </Button>

                <Link to="/admin">
                  <Button variant="primary">Go Back</Button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      );
    }
  }
}
