import React from 'react';
import axios from 'axios';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        axios.get(`http://localhost:8000/inventory/${this.props.id}`)
            .then(res => {
                let info = res.data[0]
                console.log(info)
                this.setState(info)
            })
            .catch(error => {
                console.log('error')
            })
    }


    render() {
        return (
            <div>
                <h1>{this.state.product_name} </h1>
                <img src ={this.state.photo}></img>
                <ul>
                    <li>Product Description: {this.state.description}</li>
                    <li>Price: ${this.state.price}</li>
                    <li>In Stock: {this.state.quantity}</li>
                </ul>
                <button>Add {this.state.product_name} to cart</button>
            </div>
        )

    }
}

export default Product