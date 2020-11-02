import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class LogOut extends Component {

    logOut = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        window.location.reload(false);
    }

    render() {
        return(
            <Button onClick={this.logOut}>Logout</Button>
        )
    }

}