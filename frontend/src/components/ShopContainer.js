import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ProductCard from "./ProductCard";
import Product from "./Product";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ShopContainer extends Component {
  constructor(state) {
    super(state);

    this.state = {
      inputValue: "",
      products: [],
    };
  }

  filterOnChange = (event) => {
    console.log("hi from onChange", event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  componentDidMount() {
    return axios
      .get("http://localhost:8000/inventory/")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log("error");
      });
  }
  render() {
    const filteredProducts = this.state.products.filter((product) => {
      return product.product_name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
    return (
      <div>
        <Header
          inputValue={this.state.inputValue}
          filterOnChange={this.filterOnChange}
          product={this.filteredProducts}
        />
        {this.state.products && (
          <Container>
            <Router>
              <Switch>
                <Route exact path="/shop">
                  <hr />
                  <Row>
                    {this.state.products.map((item, index) => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        product_name={item.product_name}
                        shortDescription={item.shortDescription}
                        longDescription={item.longDescription}
                        photo={item.photo}
                        price={item.price}
                        quantity={item.quantity}
                        rating={item.rating}
                        rating_count={item.rating_count}
                      />
                    ))}
                  </Row>
                </Route>

                {this.state.products.map((item, index) => (
                  <Route exact path={`/shop/${item.id}`}>
                    <Product
                      key={item.id}
                      id={item.id}
                      product_name={item.product_name}
                      shortDescription={item.shortDescription}
                      longDescription={item.longDescription}
                      photo={item.photo}
                      price={item.price}
                      quantity={item.quantity}
                      rating={item.rating}
                      rating_count={item.rating_count}
                    />
                  </Route>
                ))}
              </Switch>
            </Router>
          </Container>
        )}
      </div>
    );
  }
}

export default ShopContainer;
