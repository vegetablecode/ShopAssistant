import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  ListGroupItem
} from "reactstrap";
import { connect } from "react-redux";

import { deleteItem, deleteProduct } from "../../actions/itemActions";

class ListCard extends Component {
  state = {
    filteredProducts: []
  }

  removeList = id => {
    this.props.deleteItem(id);
  };

  removeProduct = (list_id, product_id) => {
    this.props.deleteProduct(list_id, product_id);
  }

  filterProducts = (id, products) => {
    return products.filter(product => product.item === id)
  }

  componentDidMount() {
    this.setState({
      filteredProducts: this.filterProducts(this.props.id, this.props.products.products)
    })
  }

  render() {
    return (
      <Col className="lg-4 mb-4">
        <Card h="100" className="custom-list-card">
          <CardHeader>
            <h4>{this.props.name}</h4>
          </CardHeader>
          <CardBody>
            {this.state.filteredProducts.map(({ _id, name }) => (
              <ListGroupItem key={_id}>
                <Button className="remove-btn" color="danger" size="sm" onClick={() => this.removeProduct(this.props.id, _id)}>
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            ))}
          </CardBody>
          <CardFooter>
            <Button onClick={() => this.removeList(this.props.id)}>
              Remove List
            </Button>
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
