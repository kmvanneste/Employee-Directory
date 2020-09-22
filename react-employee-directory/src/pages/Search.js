import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    order: "descending",
    employees: [{}],
    filteredEmployees: [{}],
  }

componentDidMount() {
  API.getEmployees()
    .then(res => {
      // console.log(res.data.results);
      this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
    })
    .catch(err => console.log(err));
}

handleInputChange = event => {
  // console.log(event.target.value);
  const filter = event.target.value;
  const filteredList = this.state.employees.filter(person => {
      let values = Object.values(person).join("").toLowerCase();
      // console.log(values);
      return values.indexOf(filter.toLowerCase()) !== -1;
  });
  // console.log(filteredList);
  this.setState({filteredEmployees: filteredList})
}

handleSort = () => {
  if (this.state.order === "descending") {
    this.setState({order: "ascending"})
    const { filteredEmployees } = this.state;
    filteredEmployees.sort((a, b) => a - b)    
    this.setState({ filteredEmployees })
    // let sortArray = this.state.employees.sort((a, b) => {
    //   let nameA = a.name.toUpperCase();
    //   let nameB = b.name.toUpperCase();
    //   return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    //  } );
    //  console.log(sortArray);
    //  this.setState({filteredEmployees: sortArray});
  } else {
    this.setState({order: "descending"})
    const { filteredEmployees } = this.state;
    filteredEmployees.sort((a, b) => b - a).reverse();
    this.setState({ filteredEmployees })
  }
  console.log(this.state.order);
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
        />
        <SearchResults
          employees={this.state.filteredEmployees}
          handleSort={this.handleSort}
          // sortAscending={this.sortAscending}
          // sortDescending={this.sortDescending}
        />
      </Container>
    </div>
  );
}
}
export default Search;
