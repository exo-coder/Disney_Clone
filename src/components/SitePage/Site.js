import React from 'react'
import styled from 'styled-components'
import SiteNav from './SiteNav';

const SiteBg = "/images/site-bg-pc.png"
export default function Site() {
    return (
        <Main style={{backgroundImage: `url(${SiteBg})`}}>
           <SiteNav />
        </Main>
    )
}

const Main = styled.div`

`;

