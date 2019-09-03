import React, { Component, Fragment } from "react";
import { Card, Button, Col } from "react-bootstrap";

class CardsCategory extends Component {
  render() {
    const { name, img, id } = this.props.data;
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
              src={img}
            />
            <Card.Body variant="dark">
              <Card.Title>{name}</Card.Title>
              <Button
                onClick={() => this.props.catDetail(id)}
                variant="primary"
              >
                Show details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Fragment>
    );
  }
}

export default CardsCategory;
