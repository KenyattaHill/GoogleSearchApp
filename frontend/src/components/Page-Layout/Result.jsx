import React from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";

export default function Result({ config, data }) {
  const { action, label } = config;
  const { title, subtitle, authors, description, image, link } = data;
  return (
    <Card fluid>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8} floated="left">
              <Card.Header>{title}</Card.Header>
              {subtitle && <Card.Header>{subtitle}</Card.Header>}
              {authors && `Written By: ${authors[0]}`}
            </Grid.Column>
            <Grid.Column width={3} floated="right">
              <Button
                floated="right"
                onClick={action}
                size="tiny"
                color={label === "Delete" ? "red" : "blue"}
              >
                {label}
              </Button>
              <Button target="_blank" floated="right" as="a" size="tiny" basic color="green" href={link}>
                View
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image floated="left" size="small" src={image} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Description textAlign="left">
                {description}
              </Card.Description>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
}
