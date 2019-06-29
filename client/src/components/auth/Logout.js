import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { logout } from "../../actions/authActions";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  logoutAction = () => {
    this.props.history.push("/");
    this.props.logout();
  };

  render() {
    return (
      <Fragment>
        <NavLink onClick={this.logoutAction} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(withRouter(Logout));
