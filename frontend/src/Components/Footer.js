import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Logo from "../images/logo-light.png";

class Footer extends Component {
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
      <div className="mt-auto">
        <Navbar
          className="d-flex justify-content-center"
          bg="dark"
          variant="dark"
          expand="md"
          style={{
            position: "relative",
            height: "150px",
            clear: "both",
            paddingTop: "20px",
          }}
        >
          <Navbar.Brand href="/" className="mb-0 pb-0">
            <Image
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="logo text-center"
              src={Logo}
              width="80"
              height="80"
            />
            <p className="center mb-0 pb-0" style={{ fontSize: "10px" }}>
              ©2020, Fake-a-zon.com Inc.
            </p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
