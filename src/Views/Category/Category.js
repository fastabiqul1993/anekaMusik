import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Redux/Action/product";
import { getBranch } from "../../Redux/Action/branch";
import { getCategory } from "../../Redux/Action/category";
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
    CategoryId: this.props.match.params.CategoryId,
    categoryData: [],
    categories: [],
    branchs: []
  };

  componentDidMount = async () => {
    await this.props.dispatch(getBranch());
    await this.props.dispatch(getCategory());
    await this.props.dispatch(getProduct(this.state.CategoryId));

    this.setState({
      categoryData: this.props.rproduct.productList,
      categories: this.props.rcategory.categoryList,
      branchs: this.props.rbranch.branchList
    });
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
    const { modalShow, categoryData, categories, branchs } = this.state;
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
            branchs={branchs}
            categories={categories}
            onHide={this.modalToggle}
          ></Modals>
          {/* Card */}
          <Row>
            {categoryData.length > 0 ? (
              categoryData.map(singleCategory => (
                <Cards
                  catDetail={this.handleCategory}
                  key={singleCategory.id}
                  data={singleCategory}
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
    rproduct: state.Product,
    rbranch: state.Branch,
    rcategory: state.Category
  };
};

export default connect(mapStateToProps)(Category);
