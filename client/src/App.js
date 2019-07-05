import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./store";

import { loadUser } from "./actions/authActions";

import AppNavbar from "./components/layout/AppNavbar";
import ShoppingList from "./components/dashboard/ShoppingList";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <AppNavbar />
            <Container>
              <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shoppingList" component={ShoppingList} />
              </Switch>
            </Container>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
