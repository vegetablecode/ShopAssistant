import React, { Component } from "react";
import { Container } from "reactstrap";
import { TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row } from "reactstrap";

import { getItems, deleteItem } from "../../actions/itemActions";
import ItemModal from "./ItemModal";
import ListCard from "./ListCard";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();

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
          <TransitionGroup className="shopping-list">
            <Row>
              {items.map(({ _id, name }) => (
                <ListCard key={_id} name={name} />
              ))}
            </Row>
          </TransitionGroup>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
