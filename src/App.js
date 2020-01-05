import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardContainer from './containers/DashboardContainer';
import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';
import "./App.css"
import { verifyAuth } from './Store/Actions/Auth';
import { logoutUser } from './Store/Actions/Auth';
import Profile from './components/Profile';
import ProtectedRoute from './ProtectedRoute';
class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    this.props.verifyAuth();
  }

  render() {
    const { logoutUser, isVerifying, isAuthenticated } = this.props
    return (
      <Router >
        <React.Fragment>
          <Navigation authenticated={isAuthenticated} logoutUser={logoutUser} />
          <Switch>
            <ProtectedRoute path="/profile" component={Profile} isVerifying={isVerifying} isAuthenticated={isAuthenticated} />
            <ProtectedRoute path="/dashboard" component={DashboardContainer} isVerifying={isVerifying} isAuthenticated={isAuthenticated} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/" component={Register} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
const mapDispatchTProps = {
  verifyAuth: verifyAuth, logoutUser
}

export default connect(mapStateToProps, mapDispatchTProps)(App);


