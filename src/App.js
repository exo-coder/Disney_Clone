import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/HomePage/Home";
import Site from "./components/SitePage/Site";
//firebase stuff
import { onAuthStateChanged, getAuth } from "firebase/auth";
import initializeFirebase from "./firebase";

export default function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const auth = getAuth(initializeFirebase);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return setIsUserSignedIn(true);
    } else {
      setIsUserSignedIn(false);
    }
  });

  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} >
          {isUserSignedIn ? (
            <Redirect to="/site"  />
          ) : (
            null && alert("some problem with sign in...")
          )}
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/site" component={Site} />
        </Switch>
      </Router>
    </Main>
  );
}

const Main = styled.div``;
