import React, { Component, Fragment } from "react";
import { Button, Container, Col, Row, Form, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import "./ProductDetail.css";

class ProductDetail extends Component {
  constructor(props) {
    const target = props.violinData.find(function(data) {
      return data.id === props.match.params.id;
    });
    super(props);
    this.state = {
      data: props.violinData,
      newData: target,
      oldData: target,
      isRedirect: false
    };
  }

  onChange = e => {
    const newData = { ...this.state.newData };
    newData[e.target.name] = e.target.value;
    this.setState({
      newData: newData
    });
  };

  updateData = id => {
    let updateData = this.state.data.map((target, index) => {
      if (target.id === id) {
        this.state.data.splice(index, 1, this.state.newData);
      }
    });

    this.setState({ data: updateData, isRedirect: true });
  };

  remove = id => {
    let deleted = this.state.data.map((target, index) => {
      if (target.id === id) {
        this.state.data.splice(index, 1);
      }
    });

    this.setState({ data: deleted, isRedirect: true });
  };

  initData = data => {
    this.setState({
      updateData: {
        id: data.id,
        title: data.title,
        description: data.description,
        image: data.image
      }
    });
  };

  render() {
    const { oldData, isRedirect } = this.state;

    if (isRedirect) {
      return <Redirect to={`/category/${oldData.type}`} />;
    }
    return (
      <Fragment>
        <Container className="detail">
          <Row key={oldData.id}>
            <Col sm={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={oldData.image} />
              </Card>
            </Col>
            <Col sm={8}>
              <Row>
                <Col sm={9}>
                  <h3>{oldData.title}</h3>
                </Col>
                <Col sm={3}>
                  <Button
                    className="but-home"
                    variant="primary"
                    onClick={() => this.updateData(oldData.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="but-home"
                    variant="danger"
                    onClick={() => this.remove(oldData.id)}
                  >
                    Delete
                  </Button>
                </Col>
                <Col sm={12}>
                  <h4>{oldData.description}</h4>
                </Col>
                <Col sm={12}>
                  <Form>
                    <Form.Group as={Row}>
                      <Form.Label column sm="2">
                        Available in
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder={oldData.branch}
                          name="branch"
                          onChange={this.onChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                      <Form.Label column sm="2">
                        Quantity
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder={oldData.qty}
                          name="qty"
                          onChange={this.onChange}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                      <Form.Label column sm="2">
                        Price
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder={oldData.price}
                          name="price"
                          onChange={this.onChange}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* ); // })} */}
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetail;
