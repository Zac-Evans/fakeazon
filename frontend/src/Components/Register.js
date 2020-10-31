import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
      .post("http://localhost:8000/createuser", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        age: age,
        gender: gender,
      }).then((res) => {
        this.setState({ loggedIn: true });
        sessionStorage.setItem('userName', res.data.first_name);
        sessionStorage.setItem('isAdmin', res.data.admin);
        sessionStorage.setItem('userId', res.data.id);
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

            <Link className="mr-3" to="/login">
              <Button variant="primary">Login</Button>
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
