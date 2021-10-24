import React from "react";
import styled from "styled-components";
//firebase stuff
import initializeFirebase from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();
export default function HomeNav() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Main>
      <NavLogo src="/images/logo.svg" />
      <NavBtn onClick={signIn}>LOG IN</NavBtn>
    </Main>
  );
}

const Main = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 0 30px;
  padding-top: 15px;
`;

const NavLogo = styled.img`
  width: 90px;
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
