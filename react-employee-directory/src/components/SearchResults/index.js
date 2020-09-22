import React from "react";
import "./style.css";

export default function SearchResults( {employees} ) {
  return (
    <table>
    <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Date of Birth</th>
    </tr>
      {employees[0]!== undefined && employees[0].name !==undefined ? (
      employees.map(({login, picture, name, email, phone, dob}) => {
          return (
        <td className="list-group-item" key={login.uuid}>
            <td>
                <img alt={`employee`} src={picture.thumbnail}></img>
            </td>
            <td>{name.title} {name.first} {name.last}</td>
            <td><a href={"mailto:" + email}>{email}</a></td>
            <td>{phone}</td>
            <td>{dob.date.substring(0, 10)}</td>
        </td> 
          )})): 
          (
            <></>
          )
          }
    </table>
  )}
