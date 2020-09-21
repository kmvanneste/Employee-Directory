import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
  }

componentDidMount() {
  API.getEmployees()
    .then((res) => {
    let employee = res.data.results.map((employee) => {
      return {
        img: employee.picture.thumbnail,
        name: employee.name,
        email: employee.email,
        phone: employee.phone,
        city: employee.location.city,
        state: employee.location.state,
        id: employee.id,
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
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
  };

render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Any Employee</h1>

        <SearchForm
          search={this.state.search}
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
