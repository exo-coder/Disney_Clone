import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectRecommend,
  selectNewDisney,
  selectTrending,
  selectOriginal,
} from "../../event/movie/movieSlice";


export default function SiteMovies() {
  const moviesRecommends = useSelector(selectRecommend);
  const moviesNewDisneys = useSelector(selectNewDisney);
  const moviesTrendings = useSelector(selectTrending);
  const moviesOriginals = useSelector(selectOriginal);

  console.log(moviesOriginals );
 

  return (
    <Main>
      <h4>Recommended</h4>
      <Content>
        {moviesRecommends &&
          moviesRecommends.map((item) => {
            return (
              <Wrap key={item.id}>
                <img src={item.cardImg} alt={item.title} />
              </Wrap>
            );
          })}
      </Content>

      <h4>Disney New</h4>
      <Content>
        {moviesNewDisneys &&
          moviesNewDisneys.map((item) => {
            return (
              <Wrap key={item.id}>
                <img src={item.cardImg} alt={item.title} />
              </Wrap>
            );
          })}
      </Content>

      <h4>Trending</h4>
      <Content>
        {moviesTrendings &&
          moviesTrendings.map((item) => {
            return (
              <Wrap key={item.id}>
                <img src={item.cardImg} alt={item.title} />
              </Wrap>
            );
          })}
      </Content>

      <h4>Originals</h4>
      <Content>
        {moviesOriginals &&
          moviesOriginals.map((item) => {
            return (
              <Wrap key={item.id}>
                <img src={item.cardImg} alt={item.title} />
              </Wrap>
            );
          })}
      </Content>

    </Main>
  );
}

const Main = styled.div`
  padding: 0 0 25px;
  h4 {
    padding-top: 5px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
