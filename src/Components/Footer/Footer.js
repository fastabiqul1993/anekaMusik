import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <Navbar fixed="bottom" className="footer">
        <Container>
          <Navbar.Brand href="#footer"></Navbar.Brand>
          <Nav className="mr-sm-2">&copy; PT. Aneka Musik</Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Footer;
