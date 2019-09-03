import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Container } from "react-bootstrap";

import logo from "../../Assets/aneka-musik.png";
import "./Navigation.css";

function Navigation() {
  return (
    <Fragment>
      <Navbar fixed="top" className="menPrimary">
        <Container>
          <Navbar.Brand>
            <Link to={`/`}>
              <img className="menLogo" src={logo} alt="logo"></img>
            </Link>
          </Navbar.Brand>
          <Button className="float-right" variant="outline-dark">
            Login
          </Button>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Navigation;
