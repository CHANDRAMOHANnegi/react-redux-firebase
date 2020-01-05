import React, { Component } from 'react';
import Register from '../components/Register';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {registerUser} from '../Store/Actions/Auth'

class RegisterContainer extends Component {
   
    render() {
        const {registerError,isAuthenticated,registerUser } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/dashboard" />;
        } else {
            return (
                <Register
                registerError={registerError}
                registerUser={registerUser} isAuthenticated={isAuthenticated}
                />
            );
        }
    }
}


const mapStateToProps=(state)=>{
    return {
      isRegistering: state.auth.isRegistering,
      registerError: state.auth.registerError,
    };
  }
  
  const mapDispatchToProps={
      registerUser:registerUser
  }


export default connect(mapStateToProps,mapDispatchToProps)(RegisterContainer);