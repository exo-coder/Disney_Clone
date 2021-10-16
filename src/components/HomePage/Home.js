import React from "react";
import styled from "styled-components";
import HomeNav from "./HomeNav";
import HomeBann from "./HomeBann";

export default function Home() {
  return (
    <Main>
      <HomeNav />
      <HomeBann />
    </Main>
  );
}

const Main = styled.div`

`;
