import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    employees: [{}],
    filteredEmployees: [{}],
  }

componentDidMount() {
  API.getEmployees()
    .then(res => {
      console.log(res.data.results);
      this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
    })
    .catch(err => console.log(err));
}

handleInputChange() {

}

handleSort() {

}

render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Employee Directory</h1>
        <SearchForm
          handleInputChange={this.handleInputChange}
        />
        <SearchResults
          employees={this.state.filteredEmployees}
          handleSort={this.handleSort}
        />
      </Container>
    </div>
  );
}
}
export default Search;
