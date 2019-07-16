import React, { Component } from "react";
import { Form, InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addProduct } from "../../actions/productActions";

class AddProductField extends Component {
  static propTypes = {
    addProduct: PropTypes.func.isRequired
  };

  addProduct = list_id => {
    console.log(list_id);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
    };

    // clear input field
    this.form && this.form.reset();

    // Add product to list's products
    this.props.addProduct(this.props.list_id, newItem);
  };

  render() {
    return (
      <div>
        <Form innerRef={c => (this.form = c)} onSubmit={this.onSubmit}>
          <InputGroup>
            <Input
              placeholder="add a new item..."
              onChange={this.onChange}
              type="text"
              name="name"
              id="item"
            />
            <InputGroupAddon addonType="append">
              <Button color="secondary">+</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct }
)(AddProductField);
