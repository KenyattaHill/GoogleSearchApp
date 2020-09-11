import React from "react";
import { Header, Card, Segment } from "semantic-ui-react";

export default function ResultList({ results }) {
  return (
    <Segment>
      <Header as="h4">Results</Header>
      <Card.Group>{results}</Card.Group>
    </Segment>
  );
}
