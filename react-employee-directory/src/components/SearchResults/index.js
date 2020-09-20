import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map( result => (
        <li key={result} className="list-group-item">
          <img alt="Photo of Employee" src={result} />
          {/* <h2>{this.props.title}</h2>
          <h2>{this.props.firstName}</h2>
          <h2>{this.props.lastName}</h2>
          <a href={this.props.email}></a>
          <h3>{this.props.phone}</h3>
          <h3>{this.props.id}</h3> */}
        </li>
      ))}    
    </ul>
  );
}

export default SearchResults;
