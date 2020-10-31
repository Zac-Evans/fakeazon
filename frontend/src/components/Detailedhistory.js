import React from 'react';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import OrderHistoryCard from "./OrderHistoryCard"

class Detailedhistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {

        var that = this

        axios.get(`http://localhost:8000/order-history/${this.props.order_number}`)
            .then(res => {
                let orderDetails = res.data
                console.log(orderDetails)

                that.setState({ order: orderDetails })
            })
            .catch(error => {
                console.log('error')
            })

    }


    render() {
        return (
            <div>
                {this.state.order && (
                    <Container>
                        Order details for order #{this.props.order_number}
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

export default Detailedhistory