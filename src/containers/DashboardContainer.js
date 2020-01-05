import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../Store/Actions/Auth";
import Dashboard from '../components/Dashboard';

import {search} from '../Store/Actions/AlgoliaSearchAction'

class DashboardContainer extends Component {
  render() {
    const { isLoggingOut,search, logoutError ,searchData} = this.props;
    console.log("DashboardContainer",this.props);
    
    return (
      <Dashboard isLoggingOut={isLoggingOut}
      search={search} searchData={searchData}
        logoutError={logoutError}
        logoutUser={logoutUser}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    searchData:state.search.searchData
  };
}
 const mapDispatchToProps={
  search
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);