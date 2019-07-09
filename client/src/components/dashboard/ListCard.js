import React, { Component } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col
} from "reactstrap";

import { ListGroupItem } from "reactstrap";

class ListCard extends Component {
  render() {
    let items = [
      {
        id: 1,
        name: "randomtask1"
      },
      {
        id: 2,
        name: "randomtask2"
      },
      {
        id: 3,
        name: "randomtask3"
      },
      {
        id: 4,
        name: "randomtask4"
      },
      {
        id: 5,
        name: "randomtask5"
      }
    ];

    return (
      <Col className="lg-4 mb-4">
        <Card h="100" className="custom-list-card">
          <CardHeader>
            <h4>{this.props.name}</h4>
          </CardHeader>
          <CardBody>
            {items.map(({ id, name }) => (
              <ListGroupItem key={id}>
                <Button className="remove-btn" color="danger" size="sm">
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            ))}
          </CardBody>
          <CardFooter>
            <Button>Remove List</Button>
          </CardFooter>
        </Card>
      </Col>
    );
  }
}

export default ListCard;
