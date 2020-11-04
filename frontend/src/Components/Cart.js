import React, { Component } from "react";
import axios from "axios";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(state) {
    super(state);

    this.state = {};
    // this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }
  // rerenderParentCallback() {
  //   this.forceUpdate();
  // }

  componentDidMount() {
    if (!sessionStorage.getItem("userId")) {
      let productArray = JSON.parse(sessionStorage.getItem("cart"));
      axios
        .post(
          "https://e-commerce-project-2020.herokuapp.com/show-cart/logged-out",
          {
            products: productArray,
          }
        )
        .then((result) => {
          this.setState({ products: result.data });
        })
        .catch((error) => {
          console.log("error");
        });
    } else {
      axios
        .get(
          `https://e-commerce-project-2020.herokuapp.com/show-cart/${sessionStorage.getItem(
            "userId"
          )}`
        )
        .then((result) => {
          this.setState({ products: result.data });
        })
        .catch((error) => {
          console.log("error");
        });
    }
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Your shopping cart:</h2>
        {this.state.products &&
          this.state.products.map((item, index) => (
            <CartItem
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
              // rerenderParentCallback={this.rerenderParentCallback}
            />
          ))}
      </div>
    );
  }
}

export default Cart;
