import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="&#xf002; Search your instruments..."
          aria-label="Search by title"
          aria-describedby="basic-addon2"
          name="searchBox"
          onChange={e => {
            this.props.search(e);
          }}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <i className="fa fa-gear fa-spin"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default Search;
