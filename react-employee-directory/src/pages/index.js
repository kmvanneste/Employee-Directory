import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

function Search() {
  const [search, setSearch] = useState("");
  const [picture, setPicture] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setPicture(res.data[0])
        setTitle(res.data[0].name.title)
        setFirstName(res.data[0].name.first)
        setLastName(res.data[0].name.last)
        setEmail(res.data[0].email)
        setPhone(res.data[0].phone)
        setId(res.data[0].id.value);
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Any Employee</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults picture={picture} title={title} firstName={firstName} lastName={lastName} email={email} phone={phone} id={id} />
      </Container>
    </div>
  );
}

export default Search;
