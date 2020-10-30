import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
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
      description: "",
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
      .get(`http://localhost:8000/inventory/${this.state.itemEntered}`)
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
      .put(`http://localhost:8000/inventory/${this.state.itemEntered}`, {
        product_name: this.state.name,
        description: this.state.description,
        photo: this.state.photo,
        price: this.state.price,
        quantity: this.state.quantity,
      })
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
        <div className="mx-auto w-50 mt-4">
          <h1
            className="text-center mt-4"
            style={{ textDecoration: "underline" }}
          >
            Update
          </h1>

          <Form className="mb-4" onSubmit={this.handleSearchSubmit} inline>
            <div className="mx-auto">
              <p className="text-center">Enter item you would like to update</p>
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
              <ul style={{ listStyle: 'none' }}>
                <li>{this.state.item.product_name}</li>
                <li>{this.state.item.description}</li>
              </ul>
            </div>
            <Form onSubmit={this.handleUpdateSubmit}>
              <Form.Group>
                <Form.Label>Update product name</Form.Label>
                <Form.Control onChange={this.handleChange} id="name" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Update product description</Form.Label>
                <Form.Control onChange={this.handleChange} id="description" />
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

              <Button className="mr-3" type="submit" variant="primary">
                Submit
              </Button>
              <Link to="/admin">
                <Button variant="primary">Go Back</Button>
              </Link>
            </Form>
          </div>
        </div>
      );
    }
  }
}
