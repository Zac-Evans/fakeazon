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
      cart_count: 0,
      // update: 0,
    };
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }
  rerenderParentCallback() {
    this.forceUpdate();
  }

  // update = () => {
  //   this.setState({ update: this.state.update + 1 });
  // };

  filterOnChange = (event) => {
    console.log("hi from onChange", event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  componentDidMount() {
    if (!sessionStorage.getItem("userId")) {
      if (sessionStorage.getItem("cart")) {
        this.setState({
          cart_count: JSON.parse(
            sessionStorage.getItem("cart").split(",").length
          ),
        });
      }
    } else {
      axios
        .get(
          `http://localhost:8000/count-cart/${sessionStorage.getItem("userId")}`
        )
        .then((res) => {
          this.setState({ cart_count: res.data.length });
        });
    }
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
    // const filteredProducts = this.state.products.filter((product) => {
    //   return product.product_name
    //     .toLowerCase()
    //     .includes(this.state.inputValue.toLowerCase());
    // });
    return (
      <div>
        <Header
          rerenderParentCallback={this.rerenderParentCallback}
          cart_count={this.state.cart_count}
        />
        {this.state.products && (
          <Container>
            <Router>
              <Switch>
                <Route exact path="/">
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
                        rerenderParentCallback={this.rerenderParentCallback}
                      />
                    ))}
                  </Row>
                </Route>

                {this.state.products.map((item, index) => (
                  <Route key={item.id} exact path={`/shop/${item.id}`}>
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
                      update={this.update}
                      rerenderParentCallback={this.rerenderParentCallback}
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
