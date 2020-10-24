import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Product from "./Product";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  getProducts() {
    axios
      .get("http://localhost:8000/inventory/")
      .then((res) => {
        console.log(res.data);
        this.setState(res.data);
        console.log(this.state);
      })

      .catch((error) => {
        console.log("error");
      });
  }

  //   ProductList = (props) => {
  //     const products = this.state;
  //     const listItems = this.state.map((product) => (
  //       <Product key={product.toString()}></Product>
  //     ));
  //     return <ul>{listItems}</ul>;
  //   };

  componentDidMount() {
    this.getProducts();
  }
  render() {
    var productArray = [];
    for (var key in this.state) {
      productArray.push(this.state[key]);
    }

    // let productList = this.state;
    // console.log(
    //   productList.map(
    //     (id, product_name, description, photo, price, quantity) => (
    //       <Product
    //         key={id.toString()}
    //         product_name={product_name}
    //         description={description}
    //         photo={photo}
    //         price={price}
    //         quantity={quantity}
    //       />
    //     )
    //   )
    // );
    return (
      <div>
        <Row>
          {productArray.map(
            (id, product_name, description, photo, price, quantity) => (
              <Product
                key={id.toString()}
                product_name={product_name}
                description={description}
                photo={photo}
                price={price}
                quantity={quantity}
              />
            )
          )}
        </Row>
      </div>
    );
  }
}

export default Shop;
