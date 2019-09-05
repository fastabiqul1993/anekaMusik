import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Redux/Action/product";
import { getBranch } from "../../Redux/Action/branch";
import { getCategory } from "../../Redux/Action/category";
import {
  Button,
  Container,
  Row,
  Alert,
  Col,
  Pagination
} from "react-bootstrap";

import Search from "../../Components/Search/SearchCategory";
import Cards from "../../Components/Cards/CardsCategory";
import Modals from "../../Components/Modals/ModalsCategory";
import "./Category.css";

class Category extends Component {
  state = {
    modalShow: false,
    setModalShow: false,
    search: this.props.match.params.search,
    CategoryId: this.props.match.params.CategoryId,
    categoryData: [],
    categories: [],
    branchs: [],
    getPage: 1,
    totalPage: 0
  };

  componentDidMount = async () => {
    await this.props.dispatch(getBranch());
    await this.props.dispatch(getCategory());
    await this.getFixProduct();

    this.setState({
      categories: this.props.rcategory.categoryList,
      branchs: this.props.rbranch.branchList
    });
  };

  getFixProduct = async () => {
    const catId = this.state.CategoryId;
    const searching = this.state.search;
    const getPage = this.state.getPage;

    await this.props
      .dispatch(getProduct(catId, getPage, searching))
      .then(() => {
        this.setState({
          categoryData: this.props.rproduct.productList,
          totalPage: this.props.rproduct.totalProduct
        });
      })
      .catch(() => {
        alert("Something went wrong check your redux");
      });
  };

  onChange = e => this.setState({ search: e.target.value });

  onNext = async () => {
    const maxPaginate = Math.round(this.state.totalPage / 2 / 2);
    console.log(maxPaginate);
    if (this.state.getPage < maxPaginate) {
      let nextPage = this.state.getPage + 1;
      await this.setState({ getPage: nextPage });

      await this.getFixProduct();
    } else {
      alert("max next");
    }
  };

  onPrev = async () => {
    if (this.state.getPage > 1) {
      let prevPage = this.state.getPage - 1;
      await this.setState({ getPage: prevPage });

      await this.getFixProduct();
    } else {
      alert("max prev");
    }
  };

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
    // console.log(this.state.getPage);
    return (
      <Fragment>
        <Container className="category">
          {/* Search component */}
          <Search history={this.props.history} />
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
            fixproduct={this.getFixProduct}
            branchs={branchs}
            categories={categories}
            onHide={this.modalToggle}
          ></Modals>
          {/* Card */}
          <Row>
            {categoryData.length > 0 ? (
              this.props.rproduct.productList.map(singleCategory => (
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
          <Pagination>
            <Pagination.Prev onClick={() => this.onPrev()} />
            <Pagination.Next onClick={() => this.onNext()} />
          </Pagination>
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
