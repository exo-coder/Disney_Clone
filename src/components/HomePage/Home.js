import React from "react";
import styled from "styled-components";
import HomeBann from "./HomeBann";

export default function Home() {
  return (
    <Main>
      <HomeBann />
    </Main>
  );
}

const Main = styled.div`
  overflow: hidden;
`;
