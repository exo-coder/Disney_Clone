import React from "react";
import styled from "styled-components";

export default function SiteNav() {
  return (
    <Main>
      <NavLogo src="/images/logo.svg" />
      <NavBtn>LOG IN</NavBtn>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 0 30px;
  padding-top: 15px;
`;

const NavLogo = styled.img`
  width: 100px;
`;

const NavBtn = styled.button`
  height: 35px;
  width: 80px;
  font-size: 14px;
  color: #f9f9f9;
  border: 1px solid;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    transition: all 0.2s;
  }
`;
