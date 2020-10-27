import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return axios
      .get("http://localhost:8000/inventory/")
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log("error");
      });
  }

  render() {
    return (
      <div>
        {this.state.products && (
          <Container>
            <Row>
              {this.state.products.map((item, index) => (
                <ProductCard
                  key={item.id}
                  product_name={item.product_name}
                  description={item.shortDescription}
                  photo={item.photo}
                  price={item.price}
                  quantity={item.quantity}
                  rating={parseInt(item.rating)}
                />
              ))}
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default ProductList;
