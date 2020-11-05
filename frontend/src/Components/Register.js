import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Header from "./Header";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      password: "",
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, gender, password, age } = this.state;
    axios
      .post("https://e-commerce-project-2020.herokuapp.com/createuser", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        age: age,
        gender: gender,
      })
      .then((res) => {
        this.setState({ loggedIn: true });

        sessionStorage.setItem("userName", res.data.first_name);
        sessionStorage.setItem("isAdmin", res.data.admin);
        sessionStorage.setItem("userId", res.data.id);

        //Convert sessionStorage cart to the database
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        console.log(cart);
        if (cart) {
          axios
            .get(
              `https://e-commerce-project-2020.herokuapp.com/get-cart/${res.data[0].id}`
            )
            .then((results) => {
              console.log(cart);
              cart.map((item, index) =>
                axios.post(
                  "https://e-commerce-project-2020.herokuapp.com/add-to-cart",
                  {
                    product_id: item,
                    // quantity:
                    shopping_cart_id: results.data[0].id,
                  }
                )
              );
            });
        }
      })
      .catch(() => {
        alert("Please enter valid inputs");
        return <Redirect push to="/login" />;
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect push to="/" />;
    } else {
      return (
        <div>
          <Header />
          <Form onSubmit={this.handleSubmit} className="mt-5 w-50 mx-auto">
            <h1 className="text-center">Register</h1>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                id="firstName"
                onChange={this.handleChange}
                placeholder="John"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                id="lastName"
                onChange={this.handleChange}
                placeholder="Doe"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                id="age"
                onChange={this.handleChange}
                placeholder="35"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                id="gender"
                as="select"
              >
                <option defaultValue="Select One">Select One</option>
                <option>male</option>
                <option>female</option>
                <option>other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                onChange={this.handleChange}
                type="email"
                placeholder="example@example.com"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Link className="mr-3" to="/login">
                <Button variant="danger" className="btn-lg">
                  Login
                </Button>
              </Link>

              <Button variant="primary" className="btn-lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      );
    }
  }
}
