import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
// import CartCounter from "./CartCounter";

class Header extends Component {
  render() {
    let loggedIn = false;
    if (sessionStorage.length > 0) {
      loggedIn = true;
    }

    let isAdmin = false;
    let isAdminBool = sessionStorage.getItem("isAdmin");
    if (isAdminBool === "true") {
      isAdmin = true;
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
                <Row>
                  <Col>
                    <Image
                      className="logo"
                      src={CartIcon}
                      width="60"
                      height="60"
                      style={{ position: "absolute" }}
                    />
                  </Col>
                  <Col>
                    {/* <CartCounter cart_count={this.props.cart_count} /> */}
                  </Col>
                </Row>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
