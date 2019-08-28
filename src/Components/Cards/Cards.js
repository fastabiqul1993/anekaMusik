import React, { Component, Fragment } from "react";
import { Card, Button, Col } from "react-bootstrap";

class Cards extends Component {
  render() {
    const { title, image } = this.props.data;
    return (
      <Fragment>
        <Col sm={3} style={{ padding: "15px" }}>
          <Card
            className="shadow"
            style={{
              // width: "18rem",
              backgroundColor: "#F5D372",
              border: "none",
              padding: "15px"
            }}
          >
            <Card.Img
              style={{
                width: "5rem",
                height: "10rem",
                display: "block",
                margin: "auto"
              }}
              variant="top"
              src={image}
            />
            <Card.Body variant="dark">
              <Card.Title>{title}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    );
  }
}

export default Cards;
