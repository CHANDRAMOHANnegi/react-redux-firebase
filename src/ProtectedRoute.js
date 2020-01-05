import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from '@material-ui/core'

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={(props) =>
    isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  } />
}

export default ProtectedRoute;
