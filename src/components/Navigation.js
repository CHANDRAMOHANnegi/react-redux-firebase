import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation">
                {this.props.authenticated ? 
                    <a href="/login" onClick={this.props.logoutUser}>Logout</a>
                    :
                    <React.Fragment>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </React.Fragment>
                }
            </div>
        );
    }
}


export default Navigation;