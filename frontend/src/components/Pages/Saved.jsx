import React from "react";
import { Segment } from "semantic-ui-react";
import ResultList from "../Page-Layout/Result-List";

export default function Saved() {
  const savedResults = []
  return (
    <Segment>
      <ResultList results={savedResults} />
    </Segment>
  );
}
