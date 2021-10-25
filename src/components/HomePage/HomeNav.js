import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
//firebase stuff
import initializeFirebase from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
//Redux
import { useDispatch } from "react-redux";
import { setUserLoginDetails } from "../../event/user/userSlice";

const auth = getAuth(initializeFirebase);
const provider = new GoogleAuthProvider();

export default function HomeNav() {
  const history = useHistory();
  const dispatch = useDispatch();

  //fire-base login auth
  const Login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        history.push("site");
        userInfo(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //user information came from firebase result which we send it
  //to the store and dispatch to sates => then use it as state =>
  //useSelector ==> username & user photo
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
      <NavBtn onClick={Login}>LOG IN</NavBtn>
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
