import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Delete extends Component {
  constructor() {
    super();
    this.state = {
      itemEntered: "",
      item: [],
      itemFound: false,
      name: "",
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
        if (res.data[0] === "" || res.data[0] === undefined) {
          alert("No product");
        } else {
          axios.delete(
            `http://localhost:8000/inventory/${this.state.itemEntered}`
          );
        }
        alert("Item Deleted");
      });
  };

  render() {
    return (
      <div className="mx-auto w-50 mt-4">
        <h1
          className="text-center mt-4"
          style={{ textDecoration: "underline" }}
        >
          Delete
        </h1>

        <Form className="mb-4" onSubmit={this.handleSearchSubmit} inline>
          <div className="mx-auto">
            <p className="text-center">Enter item you would like to delete</p>
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
        <Link to="/admin">
          <Button variant="primary">Go Back</Button>
        </Link>
      </div>
    );
  }
}
