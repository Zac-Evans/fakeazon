import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
    const { email, password } = this.state;

    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        this.setState({ loggedIn: true });
        sessionStorage.setItem("userName", res.data[0].first_name);
        sessionStorage.setItem("isAdmin", res.data[0].admin);
        sessionStorage.setItem("userId", res.data[0].id);

        //Convert sessionStorage cart to the database
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        console.log(cart);
        if (cart) {
          axios
            .get(`http://localhost:8000/get-cart/${res.data[0].id}`)
            .then((results) => {
              console.log(cart);
              cart.map((item, index) =>
                axios.post("http://localhost:8000/add-to-cart", {
                  product_id: item,
                  // quantity:
                  shopping_cart_id: results.data[0].id,
                })
              );
            });
        }
      })
      .catch(() => {
        console.log("fail");
        alert("Incorrect Username or Password");
        return <Redirect push to="/login" />;
      });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect push to="/" />;
    } else {
      return (
        <div>
          <Form onSubmit={this.handleSubmit} className="mt-5 w-50 mx-auto">
            <h1 className="text-center">Login</h1>
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

            <Link className="mr-3" to="/register">
              <Button variant="primary">Register</Button>
            </Link>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      );
    }
  }
}
