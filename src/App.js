import React, { Component, Fragment } from "react";
import DummyHome from "./Data/DummyHome";
import DummyViolin from "./Data/DummyViolin";

import Navitagion from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyHome: DummyHome,
      dummyViolin: DummyViolin
    };
  }

  addItem = newItem => {
    this.setState({ dummyViolin: [...this.state.dummyViolin, newItem] });
  };

  render() {
    const { dummyHome, dummyViolin } = this.state;

    return (
      <Fragment>
        <Navitagion />
        <Home
          homesData={dummyHome}
          violinData={dummyViolin}
          addItem={this.addItem}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
