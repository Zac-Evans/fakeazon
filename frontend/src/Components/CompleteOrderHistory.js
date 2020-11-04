//return complete order history for specific user
import React, { Component } from "react";
import axios from 'axios';

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class CompleteOrderhistory extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    const that = this

    axios.get(`http://localhost:8000/order-history/user=${that.props.user_id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log('complete order history error')
      })

  }

  render() {
    return (
      <div>hi</div>
    )
  }
}

export default CompleteOrderhistory