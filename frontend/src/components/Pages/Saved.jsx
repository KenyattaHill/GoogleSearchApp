import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Segment } from 'semantic-ui-react';
import ResultList from '../Page-Layout/Result-List';
import Result from '../Page-Layout/Result';

export default function Saved() {
  const [savedResults, setSavedResults] = useState([]);

  const getResults = () =>
    axios.get('/api/result').then(response => {
      console.log(response.data)
      setSavedResults(response.data);
    });

  useEffect(() => {
    getResults()
  }, []);

  const deleteResult = id => axios.delete(`/api/result/${id}`).then(() => {
    alert('Result removed')
    getResults()
  })

  const mappedResults = savedResults.map(result => <Result config={{label: 'Delete', action: () => deleteResult(result.id)}} key={result.id} data={result} />)


  return (
    <Container>
      <ResultList results={mappedResults} />
    </Container>
  );
}
