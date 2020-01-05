import React, { Component } from "react";
// import Logout from './Logout'
class Home extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
       {/* <Logout/> */}
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}



export default Home;