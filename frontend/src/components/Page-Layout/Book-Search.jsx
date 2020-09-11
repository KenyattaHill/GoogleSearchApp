import React from "react";
import { Input, Form, Button, Segment } from "semantic-ui-react";

export default function BookSearch({ query, change, submit }) {
  return (
    <Segment>
      <Form onSubmit={submit}>
        <h4>Book Search</h4>
        <h5>Book</h5>
        <Input
          value={query}
          onChange={change}
          fluid
          size="large"
          focus
          placeholder="Search..."
          icon="search"
        />
        <Button>Search</Button>
      </Form>
    </Segment>
  );
}
