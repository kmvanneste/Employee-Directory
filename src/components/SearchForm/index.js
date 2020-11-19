import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Looking for someone specific? Search by name here"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
