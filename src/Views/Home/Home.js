import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Alert, Col } from "react-bootstrap";

import Search from "../../Components/Search/Search";
import Cards from "../../Components/Cards/CardsHome";
import Modals from "../../Components/Modals/ModalsHome";
import "./Home.css";

class Home extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
    search: "",
    homesData: this.props.homesData
  };

  onChange = e => this.setState({ search: e.target.value });

  modalToggle = () =>
    this.setState({
      modalShow: !this.state.modalShow,
      setModalShow: !this.state.setModalShow
    });

  handleType = type => {
    this.props.history.push(`/category/${type}`);
  };

  render() {
    const { search, modalShow, homesData } = this.state;
    const filtered = homesData.filter(data =>
      data.type.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <Fragment>
        <Container className="home">
          {/* Search component */}
          <Search search={this.onChange} />
          {/* Modal button */}
          <Button
            className="but-home"
            variant="warning"
            onClick={this.modalToggle}
          >
            Add new item
          </Button>
          {/* Modal */}
          <Modals
            show={modalShow}
            onHide={this.modalToggle}
            data={homesData}
          ></Modals>
          {/* Card */}
          <Row>
            {filtered.length > 0 ? (
              filtered.map(dummy => (
                <Cards
                  categoryDetail={this.handleType}
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

export default Home;
