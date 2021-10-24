import React from "react";
import styled from "styled-components";
import { navMenuData } from "./data/Sitedata";
//firebase stuff
import initializeFirebase from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";


export default function SiteNav() {
  const history = useHistory();
  const auth = getAuth(initializeFirebase);

  function signingOut() {
    signOut(auth)
    .then(() => {
      history.push("/");
      console.log("sign outed now...");
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <Main>
      <NavLogo src="/images/logo.svg" />
      <NavMenu>
        {navMenuData.map((item) => {
          return (
            <a key={item.id} href={item.link}>
              <img src={item.img} alt="" />
              <span>{item.span}</span>
            </a>
          )
        })}
      </NavMenu>
      <NavBtn onClick={signingOut}>LOG OUT</NavBtn>
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

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  padding: 0;
  margin: 0;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 1000px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
    }

    span {
      letter-spacing: 2px;
      font-size: 14px;
      color: rgb(249, 249, 249);
      margin-left: 5px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -5px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        right: 0px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
