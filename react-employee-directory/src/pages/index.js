import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  }

componentDidMount() {
  API.getEmployees()
    .then((res) => {
    // console.log("res.data.results: ", res.data.results);
    let employee = res.data.results.map((employee) => {
      return {
        img: employee.picture.thumbnail,
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        city: employee.location.city,
        state: employee.location.state,
      }
    });
    this.setState({ 
      employees: employee,
      results: res.data.results 
    })
    })
    .catch(err => console.log(err));
}

handleInputChange = event => {
    this.setState({ search: event.target.value})
  };

render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Any Employee</h1>

        <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
          {this.state.error}
        </Alert>

        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          employees={this.state.employees}
        />

        <SearchResults
          results={this.state.results}
        />

      </Container>
    </div>
  );
}
}

export default Search;
