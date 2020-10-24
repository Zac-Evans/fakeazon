import React from 'react';
import axios from 'axios';

class Detailedhistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        axios.get(`http://localhost:8000/order-history/${this.props.order_number}`)
            .then(res => {
                const orderHistory = res.data
                this.setState(orderHistory)
                console.log(this.state)
            })
            .catch(error => {
                console.log('error')
            })
    }


    render() {
        return (
            <div>
                Order History for Specific Order Number
            </div>
        )

    }
}

export default Detailedhistory