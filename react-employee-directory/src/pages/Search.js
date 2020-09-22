import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
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

handleInputChange = event => {
 this.setState({search: event.target.value})
}

handleFormSubmit = event => {
  event.preventDefault();
   if (event.target.value === (" ")) {
      this.setState({ filteredEmployees: event.target.value })
    }
  }

sortAscending = () => {
    const { filteredEmployees } = this.state;
    filteredEmployees.sort((a, b) => a - b)    
    this.setState({ filteredEmployees })
  }

sortDescending = () => {
    const { filteredEmployees } = this.state;
    filteredEmployees.sort((a, b) => a - b).reverse()
    this.setState({ filteredEmployees })
  }

render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center" style={{margin: "20px"}}>Employee Directory</h1>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <SearchResults
          employees={this.state.filteredEmployees}
          sortAscending={this.sortAscending}
          sortDescending={this.sortDescending}
        />
      </Container>
    </div>
  );
}
}
export default Search;
