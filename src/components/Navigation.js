import React, { Component } from 'react';
import {  NavLink, withRouter } from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.authenticated ? (
                       <a link="/login" onClick={this.props.logoutUser}>Logout</a>
                    )
                    :
                    (<span>
                        <a link="/login">Login</a>
                        <a link="/register">Register</a>
                    </span>
                    )}
            </div>
        );
    }
}


export default  Navigation;