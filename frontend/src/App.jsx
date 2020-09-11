import React from 'react';
import { Switch, Route } from "react-router-dom";
import Saved from "./components/Pages/Saved";
import Search from "./components/Pages/Search";
import GoogleMenu from './components/Page-Layout/Google-Menu';
import { Segment, Header} from "semantic-ui-react"

function App() {
  return (
    <div style={{height: '100vh'}}>
      <GoogleMenu />
      <div className="page">
        <Segment>
          <Header as="h1">React Google Books Search</Header>
          <Header as="h3">Search for and Save Books of Interest</Header>
        </Segment>
        <Switch>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default App;
