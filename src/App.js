import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DummyHome from "./Data/DummyHome";
import DummyViolin from "./Data/DummyViolin";

import Navitagion from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home";
import Category from "./Views/Category/Category";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyHome: DummyHome,
      dummyViolin: DummyViolin
    };
  }

  render() {
    const { dummyHome, dummyViolin } = this.state;

    return (
      <Router>
        <Navitagion />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home homesData={dummyHome} violinData={dummyViolin} {...props} />
            )}
          />
          <Route
            exact
            path="/category"
            render={() => (
              <Category violinData={dummyViolin} addItem={this.addItem} />
            )}
          />
          <Route
            path="/category/:type"
            render={props => <Category violinData={dummyViolin} {...props} />}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
