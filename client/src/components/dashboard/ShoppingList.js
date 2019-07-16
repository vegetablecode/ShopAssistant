import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row } from "reactstrap";

import { getItems, deleteItem } from "../../actions/itemActions";
import { getProducts } from "../../actions/productActions";
import ItemModal from "./ItemModal";
import ListCard from "./ListCard";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
    this.props.getProducts();

    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          <ItemModal />
          <Row>
            {items.map(({ _id, name }) => (
              <ListCard key={_id} name={name} id={_id}/>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  item: state.item,
  products: state.products
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, getProducts }
)(ShoppingList);
