import React, { Component } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  Col,
  ListGroupItem
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { deleteItem } from "../../actions/itemActions";
import { deleteProduct } from "../../actions/productActions";
import AddProductField from "./AddProductField";

class ListCard extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired
  };

  state = {
    filteredProducts: []
  };

  removeList = id => {
    this.props.deleteItem(id);
  };

  removeProduct = (list_id, product_id) => {
    this.props.deleteProduct(list_id, product_id);
  };

  filterProducts = (id, products) => {
    return products.filter(product => product.item === id);
  };

  componentDidMount() {
    this.setState({
      filteredProducts: this.filterProducts(
        this.props.id,
        this.props.products.products
      )
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredProducts: this.filterProducts(
        nextProps.id,
        nextProps.products.products
      )
    });
  }

  render() {
    return (
      <Col className="lg-4 mb-4">
        <Card h="100" className="custom-list-card">
          <CardHeader>
            <Button
              color="link"
              style={{ float: "right" }}
              onClick={() => this.removeList(this.props.id)}
            >
              Remove List
            </Button>
            <h4>{this.props.name}</h4>
          </CardHeader>
          <div>
            {this.state.filteredProducts.map(({ _id, name }) => (
              <ListGroupItem key={_id}>
                <Button
                  className="remove-btn"
                  color="outline-danger"
                  size="sm"
                  onClick={() => this.removeProduct(this.props.id, _id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            ))}
          </div>
          <CardFooter>
            <AddProductField list_id={this.props.id} />
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  products: state.products
});

export default connect(
  mapStateToProps,
  { deleteItem, deleteProduct }
)(ListCard);
