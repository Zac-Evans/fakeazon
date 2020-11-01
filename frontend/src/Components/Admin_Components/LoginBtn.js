import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {

    render() {
        return(
            <Link to="/register"><Button>Login/Register</Button></Link>
        )
    }

}