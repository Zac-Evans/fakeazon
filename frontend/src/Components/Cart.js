import React, { Component } from "react";
import axios from "axios";
import CartItem from "./CartItem";

class Cart extends Component {
  constructor(state) {
    super(state);

    this.state = {};
  }

  componentDidMount() {
    return axios
      .get(
        `http://localhost:8000/show-cart/${sessionStorage.getItem("userId")}`
      )
      .then((result) => {
        this.setState({ products: result.data });
      })
      .catch((error) => {
        console.log("error");
      });
  }
  render() {
    const style = {
      width: "100px",
    };
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
            />
          ))}
      </div>
    );
  }
}

export default Cart;
