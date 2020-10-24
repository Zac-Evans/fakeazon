import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default class Home extends Component {
  
    render() {
        return(
            <Link to="/register">
                <Button>
                    Register
                </Button>
            </Link>
        )
    }

}
