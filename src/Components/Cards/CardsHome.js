import React, { Component, Fragment } from "react";
import { Card, Button, Col } from "react-bootstrap";

class CardsHome extends Component {
  render() {
    const { image, type } = this.props.data;
    return (
      <Fragment>
        <Col sm={3} className="card-col" style={{ padding: "1rem" }}>
          <Card
            className="shadow"
            style={{
              backgroundColor: "#F5D372",
              border: "none",
              padding: "1rem"
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
              <Card.Title>{type}</Card.Title>
              <Button
                onClick={() => this.props.categoryDetail(type)}
                variant="primary"
              >
                Go to {type}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    );
  }
}

export default CardsHome;
