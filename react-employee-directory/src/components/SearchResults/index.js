import React from "react";
import "./style.css";

function SearchResults( {employees} ) {
console.log("props", employees);
  return (
    <ul className="list-group search-results">
      {employees[0]!== undefined && employees[0].name !==undefined ? (
      employees.map(
        ({login, picture, name, email, phone, location}) => {
          return (
        <li className="list-group-item" key={login.uuid}>
          <img src={picture.thumbnail}></img>
          <h5>{name.title} {name.first} {name.last}</h5>
          <p><a href={"mailto:" + email}>{email}</a></p>
          {phone}
          {location.city}
          {location.state}
        </li> 
          )})): 
          (
            <></>
          )
          }
    </ul>
  )}
  



export default SearchResults;
