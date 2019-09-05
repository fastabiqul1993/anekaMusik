import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProductById } from "../../Redux/Action/product";
import { Redirect } from "react-router-dom";
import { Button, Container, Col, Row, Form, Badge } from "react-bootstrap";
import Search from "../../Components/Search/Search";
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
    alert("Update success");
  };

  remove = id => {
    Axios.delete(`http://localhost:3000/product/${id}`);
    alert("Delete success");
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
          <Search history={this.props.history} />
          <Row>
            <Col md={3}>
              <img src={detailProduct.img} style={{ maxWidth: "250px" }} />
            </Col>
            <Col style={{ height: "500px" }} md={{ offset: 1 }}>
              <Row>
                <Col sm={2}>
                  <h3>{detailProduct.name}</h3>
                  {detailProduct.qty > 0 ? (
                    <Badge variant="success">Wonten</Badge>
                  ) : (
                    <Badge variant="danger">Telas</Badge>
                  )}
                </Col>
                <Col sm={{ offset: 7 }}>
                  <Button
                    className="but-home"
                    variant="warning"
                    onClick={() => this.updateData(detailProduct.id)}
                    style={{ marginRight: "3px" }}
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
                  <p style={{ marginTop: "30px" }}>
                    {detailProduct.description}
                  </p>
                </Col>
                <Col sm={12}>
                  <Form style={{ marginTop: "50px" }}>
                    <Form.Group as={Row}>
                      <Form.Label column sm="2">
                        Branch
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
