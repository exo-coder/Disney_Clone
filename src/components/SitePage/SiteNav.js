import React from "react";
import styled from "styled-components";
import { navMenuData } from "./data/Sitedata";
//firebase stuff
import initializeFirebase from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";
//redux calling
import { useSelector , useDispatch } from "react-redux";
import { selectUserName, selectUserPhoto , setUserLogoutState  } from "../../event/user/userSlice";

const auth = getAuth(initializeFirebase);

export default function SiteNav() {
  const history = useHistory();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();

  function logOut() {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogoutState());
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
          );
        })}
      </NavMenu>
      {userName ? (
        <LogOutDropDown>
          <UserImg  onClick={logOut} src={userPhoto} alt={userName} />
          <DropDown>
            <span>Exit</span>
          </DropDown>
        </LogOutDropDown>
      ) : (
        <NavBtn onClick={logOut}>LOG OUT</NavBtn>
      )}
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

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  text-align: center;
  position: absolute;
  top: 50px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 60px;
  opacity: 0;
`;

const LogOutDropDown = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
