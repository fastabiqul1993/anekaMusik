import React, { Component } from "react";
import uuid from "uuid";
import { Modal, Button, Form } from "react-bootstrap";

import dumImg from "../../Assets/img/gDum.png";

class ModalsHome extends Component {
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
            Add new category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="type"
                onChange={this.onChange}
                placeholder="Product Name"
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

export default ModalsHome;
