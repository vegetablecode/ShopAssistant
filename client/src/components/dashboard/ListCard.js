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

import { deleteItem } from "../../actions/itemActions";

class ListCard extends Component {
  removeList = id => {
    this.props.deleteItem(id);
  };

  render() {
    return (
      <Col className="lg-4 mb-4">
        <Card h="100" className="custom-list-card">
          <CardHeader>
            <h4>{this.props.name}</h4>
          </CardHeader>
          <CardBody>
            {this.props.products.map(({ _id, name }) => (
              <ListGroupItem key={_id}>
                <Button className="remove-btn" color="danger" size="sm">
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
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(ListCard);
