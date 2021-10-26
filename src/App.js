import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Site from "./components/SitePage/Site";
import Detail from "./components/DetailPage/Detail"

export default function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/site" component={Site} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    </Main>
  );
}

const Main = styled.div``;
