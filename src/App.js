import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Site from "./components/SitePage/Site"

export default function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/site" component={Site} />
        </Switch>
      </Router>
    </Main>
  );
}

const Main = styled.div``;
