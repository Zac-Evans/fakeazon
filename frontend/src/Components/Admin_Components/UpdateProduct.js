import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class UpdateProduct extends Component {
  constructor() {
    super();
    this.state = {
      itemEntered: "",
      item: [],
      itemFound: false,
      validUpdate: false,
      name: "",
      shortDescription: "",
      longDescription: "",
      photo: "",
      price: "",
      quantity: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSearchSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://e-commerce-project-2020.herokuapp.com/inventory/${this.state.itemEntered}`
      )
      .then((res) => {
        this.setState({ item: res.data[0] });
      })
      .then(() => {
        if (this.state.item === undefined || this.state.item === "") {
          alert("Item not found");
        } else {
          this.setState({ itemFound: true });
        }
      });
  };

  handleUpdateSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://e-commerce-project-2020.herokuapp.com/inventory/${this.state.itemEntered}`,
        {
          product_name: this.state.name,
          shortDescription: this.state.shortDescription,
          longDescription: this.state.longDescription,
          photo: this.state.photo,
          price: this.state.price,
          quantity: this.state.quantity,
        }
      )
      .then((res) => {
        this.setState({ validUpdate: true });
        alert("Product updated");
      });
  };

  render() {
    if (this.state.itemFound) {
      document.getElementById("formDiv").style.display = "block";
    }
    if (this.state.validUpdate) {
      return <Redirect push to="/admin" />;
    } else {
      return (
        <div>
          <div className="mx-auto w-50 mt-4">
            <Link style={{ textDecoration: "underline" }} to="/admin">
              Back
            </Link>
            <h1
              className="text-center mt-4"
              style={{ textDecoration: "underline" }}
            >
              Update
            </h1>

            <Form className="mb-4" onSubmit={this.handleSearchSubmit} inline>
              <div className="mx-auto">
                <p className="text-center">
                  Enter item you would like to update
                </p>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  id="itemEntered"
                  onChange={this.handleChange}
                />
                <Button type="submit" variant="outline-primary">
                  Search
                </Button>
              </div>
            </Form>

            <div id="formDiv" style={{ display: "none" }}>
              <div className="text-center">
                <ul style={{ listStyle: "none" }}>
                  <li>{this.state.item.product_name}</li>
                  <li>{this.state.item.photo}</li>
                </ul>
              </div>
              <Form onSubmit={this.handleUpdateSubmit}>
                <Form.Group>
                  <Form.Label>Update product name</Form.Label>
                  <Form.Control onChange={this.handleChange} id="name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Update product short description</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    id="shortDescription"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Update product long description</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    id="longDescription"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Update product URL or select file</Form.Label>
                  <Form.Control onChange={this.handleChange} id="photo" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Update product price</Form.Label>
                  <Form.Control onChange={this.handleChange} id="price" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Update product quantity</Form.Label>
                  <Form.Control onChange={this.handleChange} id="quantity" />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button className="mr-3" type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      );
    }
  }
}
