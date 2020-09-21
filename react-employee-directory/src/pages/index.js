import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    employees: [],
    results: [],
  }

componentDidMount() {
  API.getEmployees()
    .then(res => {
      console.log(res.data.results);
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
    })
    })
    .catch(err => console.log(err));
}

render() {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Employee Directory</h1>

        <SearchForm
          employees={this.state.employees}
        />

        <SearchResults
          results={this.state.employees}
        />

      </Container>
    </div>
  );
}
}
export default Search;
