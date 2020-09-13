import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import BookSearch from "../Page-Layout/Book-Search";
import ResultList from "../Page-Layout/Result-List";
import Result from "../Page-Layout/Result";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  }

  const saveResult = result => axios.post('/api/result', {result})
    .then(() => alert('result saved!'))
    .catch(console.error)

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submitting ',query)
    fetch('/api/search?q=' + query)
      .then(x => x.json())
      .then(res => {
        console.log(res)
        setResults(
          res.map((result, i) => <Result key={i} config={{label: 'Save', action: () => saveResult(result)}} data={result}/>)
        )
      })
  }
  return (
    <Container>
      <BookSearch change={handleChange} query={query} submit={handleSubmit} />
      {results.length > 0 && <ResultList results={results} />}
    </Container>
  );
}
