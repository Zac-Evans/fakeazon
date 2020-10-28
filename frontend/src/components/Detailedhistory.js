import React from 'react';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Detailedhistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {

        var that = this

        axios.get(`http://localhost:8000/order-history/${this.props.order_number}`)
            .then(res => {
                let orderDetails = res.data

                orderDetails.map((item, index) => (

                    axios.get(`http://localhost:8000/inventory/${item.inventory_id}`)
                        .then(details => {
                            item.key = item.inventory_id

                            item.product_name = details.data[0].product_name

                            that.setState({isLoaded: true})
                        })
                        .catch(error => {
                            console.log('nested axios error')
                        })
                ))
                that.setState({ order: orderDetails })


            })
            .catch(error => {
                console.log('error')
            })

    }


    render() {
        return (
            <div>
                {this.state.order && this.state.isLoaded && (
                    <Container>
                        Items ordered for order #{this.props.order_number}
                        <Row>
                            {this.state.order.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        
                                        {console.log(item.product_name)}
                                    hi
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