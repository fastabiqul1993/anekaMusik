import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../Redux/Action/category";
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
    homesData: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      homesData: this.props.data.categoryList
    });
  };

  onChange = e => this.setState({ search: e.target.value });

  modalToggle = () =>
    this.setState({
      modalShow: !this.state.modalShow,
      setModalShow: !this.state.setModalShow
    });

  handleType = CategoryId => {
    this.props.history.push(`/category/${CategoryId}`);
  };

  render() {
    const { search, modalShow, homesData } = this.state;
    const filtered = homesData.filter(data =>
      data.name.toLowerCase().includes(search.toLowerCase())
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
              filtered.map(category => (
                <Cards
                  categoryDetail={this.handleType}
                  key={category.id}
                  data={category}
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

const mapStateToProps = state => {
  return {
    data: state.Category
  };
};

export default connect(mapStateToProps)(Home);
