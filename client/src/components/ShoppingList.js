import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: "Eggs" },
      { id: uuid(), name: "Steak" },
      { id: uuid(), name: "Water" },
      { id: uuid(), name: "Apples" }
    ]
  };

  render() {
    return (
      <div>
        <Container>
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={() => {
              const name = prompt("Enter Item");
              if (name) {
                this.setState(state => ({
                  items: [...state.items, { id: uuid(), name }]
                }));
              }
            }}
          >
            Add Item
          </Button>
          <ListGroup>
            <TransitionGroup className="shopping-list">
              {this.state.items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={state =>
                        this.setState({
                          items: this.state.items.filter(item => item.id !== id)
                        })
                      }
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}

export default ShoppingList;
