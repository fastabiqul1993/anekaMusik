import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";

class ModalsCategory extends Component {
  state = {
    newData: {
      img:
        "https://vignette.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest/scale-to-width-down/133?cb=20130309213400"
    }
  };

  onChange = e => {
    const newData = { ...this.state.newData };
    newData[e.target.name] = e.target.value;
    this.setState({
      newData
    });
  };

  onSubmit = () => {
    Axios.post("http://localhost:3000/product", this.state.newData)
      .then(() => {
        alert("Add success");
      })
      .catch(() => {
        alert("add failed");
      });
    this.props.onHide();
    this.setState({
      newData: {
        img:
          "https://vignette.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest/scale-to-width-down/133?cb=20130309213400"
      }
    });
  };

  render() {
    const { props } = this;
    console.log("ini newData", this.state.newData);
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.onChange}
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="CategoryId"
                onChange={this.onChange}
                as="select"
              >
                <option>Select categories...</option>
                {props.categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                name="BranchId"
                placeholder="Select branch..."
                onChange={this.onChange}
                as="select"
              >
                <option>Select branchs...</option>
                {props.branchs.map(branch => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="text"
                name="qty"
                onChange={this.onChange}
                placeholder="Quantity"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                onChange={this.onChange}
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={this.onChange}
                rows="3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.onHide}>
            Cancel
          </Button>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    rbranch: state.Branch,
    rcategory: state.Category
  };
};

export default ModalsCategory;
