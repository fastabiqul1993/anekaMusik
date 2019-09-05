import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Search extends Component {
  state = {
    search: "",
    isRedirect: false
  };

  onChange = e => this.setState({ search: e.target.value });

  onPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      // this.props.history.push(`/category/search/${this.state.search}`);
      window.location.replace(`/category/search/${this.state.search}`);
    }
  };

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="&#xf002; Search your instruments..."
          aria-label="Search by title"
          aria-describedby="basic-addon2"
          name="search"
          onChange={this.onChange}
          onKeyPress={this.onPress}
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
