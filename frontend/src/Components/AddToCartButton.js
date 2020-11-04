import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showDiv = () => {
    this.setState.visible = false;
  };

  addToCart = (product) => {
    let addedToCart = () => {
      this.setState({ visible: true });
      setTimeout(() => {
        this.setState({
          visible: false,
        });
      }, 3000);
      // this.props.rerenderParentCallback();
    };
    //Check if logged in. If not, add to local storage cart
    if (!sessionStorage.getItem("userId")) {
      if (!sessionStorage.getItem("cart")) {
        let cart = [this.props.id];
        sessionStorage.setItem("cart", JSON.stringify(cart));
      } else {
        let cart = JSON.parse(sessionStorage.getItem("cart"));
        cart.push(this.props.id);
        sessionStorage.setItem("cart", JSON.stringify(cart));
        addedToCart();
      }
    }
    //If logged in, store cart in database
    else {
      axios
        .get(
          `https://e-commerce-project-2020.herokuapp.com/get-cart/${sessionStorage.getItem(
            "userId"
          )}`
        )
        .then((res) => {
          axios.post(
            "https://e-commerce-project-2020.herokuapp.com/add-to-cart",
            {
              product_id: this.props.id,
              // quantity:
              shopping_cart_id: res.data[0].id,
            }
          );
        });
      addedToCart();
    }
  };

  render() {
    let style = {};
    const fadeOut = {
      opacity: 0,
      transition: "opacity 0.5s",
    };

    const fadeIn = {
      opacity: 1,
      transition: "opacity 0.3s 0.3s",
    };

    if (!this.state.visible) style = fadeOut;
    if (this.state.visible) style = fadeIn;
    return (
      <div>
        <Button
          variant="primary"
          className="addToCartButton m-1"
          onClick={this.addToCart}
        >
          Add to Cart
        </Button>

        <h6 key={this.props.id} className="pt-2 pb-0 mb-0" style={style}>
          Added to cart.
        </h6>
      </div>
    );
  }
}

export default AddToCartButton;
