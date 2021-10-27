import React, { useEffect } from "react";
import styled from "styled-components";
import SiteMovies from "./SiteMovies";
import SiteNav from "./SiteNav";
import SiteSlider from "./SiteSlider";
import SiteViewers from "./SiteViewers";
import { moviesDataJS } from "./data/SiteMoviesDataWithJS";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../event/movie/movieSlice";
import { selectUserName } from "../../event/user/userSlice";
import { original } from "immer";

export default function Site() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    moviesDataJS.map((item) => {
      switch (item.type) {
        case "recommend": 
        recommends.push({
          id: item.id,
          title: item.title,
          cardImg: item.cardImg,
        }); 
        break;

        case "new": 
        newDisneys.push({
          id: item.id,
          title: item.title,
          cardImg: item.cardImg,
        }); 
        break;

        case "trending": 
        trending.push({
          id: item.id,
          title: item.title,
          cardImg: item.cardImg,
        }); 
        break;

        case "original": 
        originals.push({
          id: item.id,
          title: item.title,
          cardImg: item.cardImg,
        }); 
        break;
        
      }
      
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        trending: trending,
        original: originals,
      })
    );
  }, [userName]);

  return (
    <Main>
      <SiteNav />
      <Container>
        <SiteSlider />
        <SiteViewers />
        <SiteMovies />
      </Container>
    </Main>
  );
}

const Main = styled.div``;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 20px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/site-bg-pic.png") center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
