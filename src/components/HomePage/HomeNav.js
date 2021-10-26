import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
//firebase stuff
import initializeFirebase from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setUserLoginDetails,
  selectUserName,
  selectUserPhoto,
} from "../../event/user/userSlice";

//firebase popup setting
const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();

export default function HomeNav() {
  const history = useHistory();

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  //fire-base login auth handling
  const Login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        userInfo(result.user);
        history.push("site");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //user information came from firebase-result which we send it
  //to the store and dispatch to states => then use that(state) as state =>
  //useSelector ==> username & user photo || call the info from redux !
  const userInfo = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Main>
      <NavLogo src="/images/logo.svg" />
      {userName ? (
        <LogOutDropDown>
          <UserImg onClick={() => history.push("site")} src={userPhoto} alt={userName} />
          <DropDown >
            <span>Site</span>
          </DropDown>
        </LogOutDropDown>
      ) : (
        <NavBtn onClick={Login}>LOG IN</NavBtn>
      )}
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

