import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo-light.png";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="pb-0 pt-0" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image className="logo" src={Logo} fluid width="120" height="120" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              htmlFor="
            search"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.props.inputValue}
              onChange={this.props.filterOnChange}
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Header;
