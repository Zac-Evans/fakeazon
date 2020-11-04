//return complete order history for specific user
import React, { Component } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OrderHistoryCard from "./OrderHistoryCard";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Detailedhistory from "./Detailedhistory";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class CompleteOrderhistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const that = this;
    let user_id = sessionStorage.getItem("userId");

    axios
      .get(
        `https://e-commerce-project-2020.herokuapp.com/order-history/user=${user_id}`
      )
      .then((res) => {
        let orderDetails = res.data;
        console.log(orderDetails);

        that.setState({ order: orderDetails });
      })
      .catch((error) => {
        console.log("complete order history error");
      });
  }

  render() {
    let user_id = sessionStorage.getItem("userId");

    return (
      <div>
        {this.state.order && (
          <Container>
            Order history for user #{user_id}
            <Router>
              <Route exact path={`/order-history/user`}>
                <Row>
                  {this.state.order.map((item, index) => (
                    <OrderHistoryCard
                      key={item.id}
                      id={item.order_number}
                      product_name={item.inventory.product_name}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  ))}
                </Row>
              </Route>

              {this.state.order.map((item, index) => (
                <Route exact path={`/order-history/order=${item.order_number}`}>
                  <Detailedhistory
                    key={item.id}
                    id={item.order_number}
                    product_name={item.inventory.product_name}
                    quantity={item.quantity}
                    price={item.price}
                  />
                </Route>
              ))}
            </Router>
          </Container>
        )}
      </div>
    );
  }
}

export default CompleteOrderhistory;
