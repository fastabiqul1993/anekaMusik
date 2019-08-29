import React, { Component, Fragment } from "react";
import { Button, Container, Col, Row, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// import ModalLayer from "../modal/updateitem.jsx";

import Datane from "../../Data/DummyViolin";

import "./ProductDetail.css";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      updatedData: {},
      oldData: {}
    };
  }

  onChange = e => {
    const newData = { ...this.state.updateData };
    newData[e.target.name] = e.target.value;
    this.setState({
      updatedData: newData
    });
  };

  componentDidMount() {
    const { props } = this;

    const found = props.violinData.find(data => {
      return data.id === props.match.params.id;
    });

    this.setState({
      data: props.violinData,
      oldData: found,
      updateData: found
    });
  }

  remove = i => {
    let index = this.state.data.findIndex(data => {
      return data.id === i;
    });
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
  };

  updateData = () => {
    let result = this.state.data;
    result.splice(
      result.indexOf(this.state.oldData),
      1,
      this.state.updatedData
    );

    this.setState({ data: result });
  };

  remove = i => {
    let index = this.state.data.findIndex(data => {
      return data.id === i;
    });
    this.state.data.splice(index, 1);
    this.setState({ data: this.state.data });
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
    const { data, updatedData } = this.state;
    const filtered = data.filter(dataFound =>
      dataFound.id.includes(this.props.match.params.id)
    );
    console.log(data);
    return (
      <Fragment>
        <Container className="detail">
          {filtered.map(data => {
            return (
              <Row key={data.id}>
                <Col sm={3}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={data.image} />
                  </Card>
                </Col>
                <Col sm={8}>
                  <Row>
                    <Col sm={9}>
                      <h3>{data.title}</h3>
                    </Col>
                    <Col sm={3}>
                      <Button
                        className="but-home"
                        variant="primary"
                        onClick={this.updateData}
                      >
                        Edit
                      </Button>
                      <Button
                        className="but-home"
                        variant="danger"
                        onClick={() => this.remove(data.id)}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col sm={12}>
                      <h4>{data.description}</h4>
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
                              placeholder={data.branch}
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
                              placeholder={data.qty}
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
                              placeholder={data.price}
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
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetail;
