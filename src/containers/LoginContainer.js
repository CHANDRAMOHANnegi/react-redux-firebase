import React, { Component } from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../Store/Actions/Auth'

class LoginContainer extends Component {

  render() {
    const { loginError, isAuthenticated, loginUser } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <Login
          loginError={loginError}
          loginUser={loginUser} isAuthenticated={isAuthenticated}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = {
  loginUser: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);