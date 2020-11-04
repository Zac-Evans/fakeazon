import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo-light.png";

class Header extends Component {

  componentDidMount = () => {
    if (sessionStorage.getItem('userName')) {
      document.getElementById('loginBtn').style.display = 'none';
    }
  }

  render() {
    return (
      <div>
        <Navbar className="pb-0 pt-0" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Image className="logo" src={Logo} fluid width="120" height="120" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">Prices</Link>
            <Link to="/admin">Admin</Link>
            <Link id="loginBtn" to="/register"><Button>Login/Register</Button></Link>
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
