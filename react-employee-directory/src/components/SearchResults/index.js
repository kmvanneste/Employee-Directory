import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map( (results) => (
        <li className="list-group-item">
          <img alt="Photo of Employee" src={this.props.picture} />
          <h2>{props.title}</h2>
          <h2>{props.firstName}</h2>
          <h2>{props.lastName}</h2>
          <a href={props.email}></a>
          <h3>{props.phone}</h3>
          <h3>{props.id}</h3>
        </li>
      ))}    
    </ul>
  );
}

export default SearchResults;
