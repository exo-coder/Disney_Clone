import React from "react";
import styled from "styled-components";

//const bgPic = '/images/home-bg-pic.jpg';
export default function HomeBann() {
  return (
    <Main >
      <div  className="section">
        <div className="bg-img" />
        <div className="cta">
          <img src='/images/cta-logo-one.png' className="cta-logo" />
        </div>

      </div>
    </Main>
  );
}

const Main = styled.div`
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

.section {
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
}

.bg-img {
  background-image: url('/images/home-bg-pic.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  
}
`;

