import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
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
import History from "./Admin_Components/History";

class Header extends Component {
  render() {
    let loggedIn = false;
    if (sessionStorage.getItem("userId")) {
      loggedIn = true;
    }

    let isAdmin = false;
    let isAdminBool = sessionStorage.getItem("isAdmin");
    // console.log(isAdminBool);
    if (isAdminBool === "true") {
      isAdmin = true;
    }
    return (
      <div>
        <Navbar className="pb-0 pt-0 " bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="/">
            <Image
              className="logo"
              src={Logo}
              fluid
              width="120"
              height="120"
              style={{ minWidth: "120px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form
              inline
              className="w-100 d-flex justify-content-center"
              style={{ minWidth: "310px" }}
            >
              <FormControl
                htmlFor="search"
                type="text"
                placeholder="Search"
                className="w-75"
                value={this.props.inputValue}
                onChange={this.props.filterOnChange}
              />
              <Button variant="outline-info">Search</Button>
            </Form>{" "}
            <div className="d-flex justify-content-center align-items-center">
              {loggedIn && <History />}
              {isAdmin && <AdminBtn />}
              {loggedIn && <LogOut />}
              {!loggedIn && <Login />}
              <Link to="/checkout">
                <Image
                  className="logo m-2"
                  src={CartIcon}
                  width="60"
                  height="60"
                />
              </Link>
            </div>
            {/* <Row>
                  <Col>
                    <CartCounter cart_count={this.props.cart_count} />
                  </Col>
                </Row> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
