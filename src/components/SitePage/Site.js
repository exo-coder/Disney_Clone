import React from 'react'
import styled from 'styled-components'
import SiteNav from './SiteNav';
import SiteSlider from './SiteSlider';
import SiteViewers from './SiteViewers';

export default function Site() {
    return (
        <Main>
           <SiteNav />
           <Container>
               <SiteSlider />
               <SiteViewers />
           </Container>
        </Main>
    )
}

const Main = styled.div`

`;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 20px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/site-bg-pic.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

