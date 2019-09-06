import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../Redux/Action/category";
import { Container, Row, Alert, Col } from "react-bootstrap";

import Search from "../../Components/Search/Search";
import Cards from "../../Components/Cards/CardsHome";
import Modals from "../../Components/Modals/ModalsHome";
import "./Home.css";

class Home extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
    homesData: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getCategory());
    this.setState({
      homesData: this.props.data.categoryList
    });
  };

  modalToggle = () =>
    this.setState({
      modalShow: !this.state.modalShow,
      setModalShow: !this.state.setModalShow
    });

  handleType = CategoryId => {
    this.props.history.push(`/category/${CategoryId}`);
  };

  render() {
    const { modalShow, homesData } = this.state;
    // console.log(this.props.location.pathname);
    return (
      <Fragment>
        <Container className="home">
          <Search history={this.props.history} />
          {/* Modal button */}
          {/* <Button
            className="but-home"
            variant="warning"
            onClick={this.modalToggle}
          >
            Add new item
          </Button> */}
          {/* Modal */}
          <Modals
            show={modalShow}
            onHide={this.modalToggle}
            data={homesData}
          ></Modals>
          {/* Card */}
          <Row>
            {homesData.length > 0 ? (
              homesData.map(category => (
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
