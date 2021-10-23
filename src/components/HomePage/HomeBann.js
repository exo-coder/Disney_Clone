import React from "react";
import styled from "styled-components";
import { bannData } from "./data/data";
import HomeNav from "./HomeNav";

export default function HomeBann() {
  return (
    <Main>
      <HomeNav />
      <BgImg />
      <Content>
        <Cta>
          <CtaLogoOne src="/images/cta-logo-one.svg" />
          <CtaBtn>GET THE DISNEY BUNDLE</CtaBtn>
          {bannData.map((item) => {
            return <Descripction key={item.id}>{item.txt}</Descripction>;
          })}
          <CtaLogoTwo src="/images/cta-logo-two.png" />
        </Cta>
      </Content>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const BgImg = styled.div`
  background-image: url("/images/home-bg-pic.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const Cta = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
`;

const CtaLogoOne = styled.img`
  margin-bottom: 10px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const CtaLogoTwo = styled.img`
  margin-bottom: 10px;
  display: block;
  width: 100%;
`;

const CtaBtn = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 10px;
  padding: 17px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
    transition: all 0.2s;
  }
`;

const Descripction = styled.p`
  color: hsla(0, 0%, 95%, 1);
  font-size: 12px;
  margin: 0 0 15px;
  line-height: 1.5;
  letter-spacing: 1px;
`;
