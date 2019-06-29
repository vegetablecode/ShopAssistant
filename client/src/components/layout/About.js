import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class About extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/shoppingList");
    }
  }

  render() {
    return <div>about page</div>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(withRouter(About));
