import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Redux/store";

import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home";
import Category from "./Views/Category/Category";
import ProductDetail from "./Views/ProductDetail/ProductDetail";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              path="/category/:CategoryId"
              render={props => <Category {...props} />}
            />
            <Route
              path="/detail/:id"
              render={props => <ProductDetail {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
