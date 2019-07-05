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
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <TransitionGroup className="shopping-list">
          <Card h="100" className="custom-list-card">
            <CardHeader>
              <h4>{this.props.name}</h4>
            </CardHeader>
            <CardBody>
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button className="remove-btn" color="danger" size="sm">
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </CardBody>
            <CardFooter>
              <Button>Remove List</Button>
            </CardFooter>
          </Card>
        </TransitionGroup>
      </Col>
    );
  }
}

export default ListCard;
