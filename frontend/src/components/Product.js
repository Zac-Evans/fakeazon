import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      product_name: "",
      description: "",
      photo: "",
      price: "",
      quantity: "",
    };
  }

  //   getProducts() {
  //     axios
  //       .get("http://localhost:8000/inventory/")
  //       .then((res) => {
  //         console.log("Data fetched.");
  //         this.setState({
  //           id: res.data[0].id,
  //           product_name: res.data[0].product_name,
  //           description: res.data[0].description,
  //           photo: res.data[0].photo,
  //           price: res.data[0].price,
  //           quantity: res.data[0].quantity,
  //         });
  //       })

  //       .catch((error) => {
  //         console.log("error");
  //       });
  //   }

  //   componentDidMount() {
  //     this.getProducts();
  //   }

  render() {
    return (
      <div>
        <Col className="center">
          <Card className="productCard">
            {/* <Card.Header as="h5"></Card.Header> */}
            <Card.Img
              variant="top"
              src={this.props.photo}
              className="productImage"
            />
            <Card.Body>
              <Card.Title>{this.props.product_name}</Card.Title>

              <Card.Text>{this.props.description}</Card.Text>
              <div>${this.props.price}</div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default Product;
