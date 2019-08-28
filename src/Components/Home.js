import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormControl,
  Container,
  InputGroup,
  Row,
  Alert,
  Col
} from "react-bootstrap";

import Cards from "./Cards/Cards";
import Modals from "./Modals/Modals";
import "./Home.css";

class Home extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
    searchBox: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  modalToggle = () =>
    this.setState({
      modalShow: !this.state.modalShow,
      setModalShow: !this.state.setModalShow
    });

  render() {
    const { homesData, violinData, addItem } = this.props;
    const { searchBox, modalShow } = this.state;
    const filtered = homesData.filter(data =>
      data.title.toLowerCase().includes(searchBox.toLowerCase())
    );
    return (
      <Fragment>
        <Container style={{ paddingTop: "5rem" }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="&#xf002; Search your instruments..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="searchBox"
              onChange={this.onChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <i className="fa fa-gear fa-spin"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>

          <Button
            style={{ color: "#FFF" }}
            variant="warning"
            onClick={this.modalToggle}
          >
            Add new item
          </Button>
          <Row>
            {filtered.length > 0 ? (
              filtered.map(dummy => <Cards key={dummy.id} data={dummy} />)
            ) : (
              <Col sm={12}>
                <Alert className="mt-3" variant="danger">
                  <Alert.Heading>Oh Snap!</Alert.Heading>
                  <p>Data not found</p>
                </Alert>
              </Col>
            )}
          </Row>

          <Modals
            show={modalShow}
            onHide={this.modalToggle}
            addItem={addItem}
            data={violinData}
          ></Modals>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
