import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../Redux/Action/product";
import { Redirect } from "react-router-dom";
import { Button, Container, Col, Row, Form, Card } from "react-bootstrap";
import Axios from "axios";

import "./ProductDetail.css";

class ProductDetail extends Component {
  state = {
    detailProduct: {},
    branchName: "",
    newData: {},
    isRedirect: false
  };

  componentDidMount = async () => {
    await this.props.dispatch(
      getProductById(Number(this.props.match.params.id))
    );
    this.setState({
      detailProduct: this.props.data.productById,
      branchName: this.props.data.productById.Branch.name
    });
  };

  onChange = e => {
    const newData = { ...this.state.newData };
    newData[e.target.name] = e.target.value;
    this.setState({
      newData
    });
  };

  updateData = id => {
    Axios.patch(`http://localhost:3000/product/${id}`, this.state.newData);
  };

  remove = id => {
    Axios.delete(`http://localhost:3000/product/${id}`);
    this.setState({ isRedirect: true });
  };

  render() {
    const { detailProduct, branchName, isRedirect } = this.state;
    if (isRedirect) {
      return <Redirect to={`/category/${detailProduct.CategoryId}`} />;
    }
    return (
      <Fragment>
        <Container className="detail">
          <Row key={detailProduct.id}>
            <Col sm={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={detailProduct.img} />
              </Card>
            </Col>
            <Col sm={8}>
              <Row>
                <Col sm={9}>
                  <h3>{detailProduct.name}</h3>
                </Col>
                <Col sm={3}>
                  <Button
                    className="but-home"
                    variant="primary"
                    onClick={() => this.updateData(detailProduct.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="but-home"
                    variant="danger"
                    onClick={() => this.remove(detailProduct.id)}
                  >
                    Delete
                  </Button>
                </Col>
                <Col sm={12}>
                  <h4>{detailProduct.description}</h4>
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
                          placeholder={branchName}
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
                          placeholder={detailProduct.qty}
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
                          placeholder={detailProduct.price}
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
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Product
  };
};

export default connect(mapStateToProps)(ProductDetail);
