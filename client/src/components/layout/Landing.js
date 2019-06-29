import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import {
  Jumbotron,
  Button,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardFooter,
  Row,
  Col
} from "reactstrap";

class Landing extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/shoppingList");
    }
  }

  learnMoreAction = () => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Helo Łorld!</h1>
          <p className="lead">A komu to po co?</p>
          <hr className="my-2" />
          <p>Appka do robienia listy zakupów meh.</p>
          <p className="lead">
            <Button color="primary" onClick={this.learnMoreAction}>
              Learn More
            </Button>
          </p>
        </Jumbotron>
        <h1 className="my-4">Welcome to Appka</h1>
        <Row>
          <Col className="lg-4 mb-4">
            <Card h="100">
              <CardHeader>
                <h4>Cart Tytul</h4>
              </CardHeader>
              <CardBody>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </CardText>
              </CardBody>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" mb="4">
            <Card h="100">
              <CardHeader>
                <h4>Cart Tytul</h4>
              </CardHeader>
              <CardBody>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </CardText>
              </CardBody>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" mb="4">
            <Card h="100">
              <CardHeader>
                <h4>Cart Tytul</h4>
              </CardHeader>
              <CardBody>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </CardText>
              </CardBody>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Landing));
