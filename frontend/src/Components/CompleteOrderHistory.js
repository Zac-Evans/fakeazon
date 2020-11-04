//return complete order history for specific user
import React, { Component } from "react";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OrderHistoryCard from "./OrderHistoryCard"
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
        let orderDetails = res.data
        console.log(orderDetails)

        that.setState({ order: orderDetails })
      })
      .catch(error => {
        console.log('complete order history error')
      })

  }

  render() {
    return (
      <div>
                {this.state.order && (
                    <Container>
                        Order history for user #{this.props.user_id}
                        <Row>
                            {this.state.order.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <OrderHistoryCard 
                                        id = {item.order_number}
                                        product_name={item.inventory.product_name}
                                        quantity = {item.quantity}
                                        price = {item.price}
                                        />
                                        
                                    
                                    </div>
                                )
                            })}
                        </Row>
                    </Container>
                )}
            </div>
    )
  }
}

export default CompleteOrderhistory