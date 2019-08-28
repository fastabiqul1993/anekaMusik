import React, { Component } from "react";
import uuid from "uuid";
import { Modal, Button, Form, Row } from "react-bootstrap";

class Modals extends Component {
  state = {
    newData: { id: uuid.v4() }
  };

  addData = e => {
    const newData = { ...this.state.newData };
    newData[e.target.name] = e.target.value;
    this.setState({
      newData
    });
  };

  onAdd = e => {
    this.props.addnewitem(this.state.newData);
    this.setState({ newData: {} });
  };

  render() {
    const { props } = this;

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
                name="productName"
                onChange={this.addData}
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="catergory"
                onChange={this.addData}
                as="select"
              >
                <option>Select Category...</option>
                <option>Bass</option>
                <option>Guitar</option>
                <option>Harp</option>
                <option>Ukulele</option>
                <option>Violin</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Branch</Form.Label>
              <Form.Control name="branch" onChange={this.addData} as="select">
                <option>Select Branch...</option>
                {props.data.map(d => (
                  <option key={d.id}>{d.branch}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Qty</Form.Label>
              <Form.Control
                type="text"
                name="qty"
                onChange={this.addData}
                placeholder="Quantity"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                onChange={this.addData}
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={this.addData}
                rows="3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={props.onHide}
            onAdd={this.onAdd}
          >
            Cancel
          </Button>
          <Button onClick={this.addData}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Modals;
