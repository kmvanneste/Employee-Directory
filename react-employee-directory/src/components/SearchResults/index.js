import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
        <li className="list-group-item" key={props.id}>
          {props.img}
          {props.name}
          {props.email}
          {props.phone}
          {props.city}
          {props.state}
        </li>
    </ul>
  )}

export default SearchResults;
