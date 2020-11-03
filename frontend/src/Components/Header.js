import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo-light.png";
import LogOut from "./Admin_Components/LogOutBtn";
import Login from "./Admin_Components/LoginBtn";
import AdminBtn from "./Admin_Components/AdminBtn";
import CartIcon from "../images/cart-icon.png";

class Header extends Component {
  render() {
    let loggedIn = false;
    if (sessionStorage.length > 0) {
      loggedIn = true;
    }

    let isAdmin = false;
    let isAdminBool = sessionStorage.getItem("isAdmin");
    // console.log(isAdminBool);
    if (isAdminBool === "true") {
      isAdmin = true;
      console.log(true);
    }
    return (
      <div>
        <Navbar className="pb-0 pt-0 " bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">
            <Image className="logo" src={Logo} fluid width="120" height="120" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 ">
              {/* <Link style={linkStyle} to="/">
                Home
              </Link>
              <Link style={linkStyle} to="/">
                Features
              </Link>
              <Link style={linkStyle} to="/">
                Prices
              </Link> */}

              <Form inline className="w-100">
                <FormControl
                  htmlFor="search"
                  type="text"
                  placeholder="Search"
                  className="w-75"
                  value={this.props.inputValue}
                  onChange={this.props.filterOnChange}
                />
                <Button variant="outline-info">Search</Button>
              </Form>
              {isAdmin && <AdminBtn />}
              {loggedIn && <LogOut />}
              {!loggedIn && <Login />}
              <Link
                style={{ marginRight: "30px", color: "rgb(222, 237, 252)" }}
                to="/checkout"
              >
                <Image
                  className="logo"
                  src={CartIcon}
                  fluid
                  width="70"
                  height="70"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const linkStyle = {
  marginRight: "10px",
};

export default Header;
