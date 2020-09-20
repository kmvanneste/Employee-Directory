import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

function Search() {
  const [search, setSearch] = useState("");
  const [picture, setPicture] = usePicture("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useFirstName("");
  const [lastName, setLastName] = useLastName("");
  const [email, setEmail] = useEmail("");
  const [phone, setPhone] = usePhone("");
  const [id, setId] = useId("");
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
        setTitle(res.data[1][0]);
        setUrl(res.data[3][0]);
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
