import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Landing extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/shoppingList");
    }
  }

  render() {
    return <div>hello</div>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Landing));
