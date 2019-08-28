import React, { Component } from "react";
import uuid from "uuid";
import { Modal, Button, Form } from "react-bootstrap";

import dumImg from "../../Assets/img/gDum.png";

class ModalsCategory extends Component {
  state = {
    newData: { id: uuid.v4(), image: dumImg }
  };

  onChange = e => {
    const newData = { ...this.state.newData };
    newData[e.target.name] = e.target.value;
    this.setState({
      newData
    });
  };

  onSubmit = () => {
    this.props.data.push(this.state.newData);
    this.props.onHide();
    this.setState({ newData: { id: uuid.v4(), image: dumImg } });
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
                name="title"
                onChange={this.onChange}
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control name="type" onChange={this.onChange} as="select">
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
              <Form.Control name="branch" onChange={this.onChange} as="select">
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

export default ModalsCategory;
