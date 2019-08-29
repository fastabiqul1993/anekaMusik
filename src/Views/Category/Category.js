import React, { Component, Fragment } from "react";
import { Button, Container, Row, Alert, Col } from "react-bootstrap";

import Search from "../../Components/Search/Search";
import Cards from "../../Components/Cards/CardsCategory";
import Modals from "../../Components/Modals/ModalsCategory";
import "./Category.css";

class Category extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
    search: "",
    categoryData: this.props.violinData
  };

  onChange = e => this.setState({ search: e.target.value });

  modalToggle = () =>
    this.setState({
      modalShow: !this.state.modalShow,
      setModalShow: !this.state.setModalShow
    });

  handleCategory = id => {
    this.props.history.push(`/detail/${id}`);
  };

  render() {
    const { modalShow, categoryData } = this.state;
    const dataClick = this.props.match.params.type;
    const filtered = categoryData.filter(data =>
      data.type.toLowerCase().includes(dataClick.toLowerCase())
    );
    return (
      <Fragment>
        <Container className="category">
          {/* Search component */}
          <Search search={this.onChange} />
          {/* Modal button */}
          <Button
            className="but-category"
            variant="warning"
            onClick={this.modalToggle}
          >
            Add new item
          </Button>
          <Modals
            show={modalShow}
            onHide={this.modalToggle}
            data={categoryData}
          ></Modals>
          {/* Card */}
          <Row>
            {filtered.length > 0 ? (
              filtered.map(dummy => (
                <Cards
                  catDetail={this.handleCategory}
                  key={dummy.id}
                  data={dummy}
                />
              ))
            ) : (
              <Col sm={12}>
                <Alert className="mt-3" variant="danger">
                  <Alert.Heading>Oh Snap!</Alert.Heading>
                  <p>Data not found</p>
                </Alert>
              </Col>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Category;
