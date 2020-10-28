import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ProductCard from "./ProductCard";
import Product from "./Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ShopContainer extends Component {
  constructor(state) {
    super(state);

    this.state = {};
  }

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
    return (
      <div>
        {this.state.products && (
          <Container>
            <hr />
            <Router>
              <Switch>
                <Route exact path="/shop">
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
