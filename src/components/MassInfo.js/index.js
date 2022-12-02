import React, { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'


const MassInfo = () => {


  return (
    <MassInfoCon>
        <Container>
            <MassInfoWrapper>
                <A>
                    <Text1>We look forward to meeting you.</Text1>
                    <Head>                    
                        <TextHead>JOIN US FOR MASS </TextHead>
                        <Hr></Hr>
                    </Head>
                </A>
                
            </MassInfoWrapper>
        </Container>
    </MassInfoCon>
  )
}

export default MassInfo

const MassInfoCon = styled.div`
    display:flex ;
    position: relative;
    width:100% ;
    ::before{
        content: '';
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:0 ;
        background: linear-gradient(180deg, rgba(255,255,255,0.9)30%, rgba(255,255,255,0.7)35%, rgba(255,255,255,0.5)40%, rgba(255,255,255,0.25)55%, rgba(255,255,255,0.1)67.5%,transparent 70%),
                    linear-gradient(180deg, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.7)35%, rgba(255,255,255,0.5)40%, rgba(255,255,255,0.25)55%, rgba(255,255,255,0.1)67.5%,transparent 70%);
     }
`
const MassInfoWrapper = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    gap:25px;
    margin: 25px 0px 25px 0px;
`
const A = styled.div`
    display:flex ;
    flex-direction: column ;
    z-index:2 ;
    height:auto ;
    width:100% ;
    gap: 15px;
    align-items:center;
    justify-content:space-between ;
        

`


const Text1 = styled.div`
    display:flex ;
    width:100% ;
    justify-content:center ;
    align-items:center ;
    font-size:40px ;
    font-family: Tangerine, monospace ;
    text-shadow: 4px 4px 5px #111 ;
    @media screen and (max-width:400px){
        font-size:35px ;
    }
`
const Head = styled.div`
    display:flex ;
    flex-direction:column ;
    height: 32px ;
    width: 100% ;
    align-items:center;
    justify-content:space-between ;
`
const TextHead = styled.div`
    display:flex ;
    font-size:20px ;
    font-weight:bold ;


`
const Hr = styled.div`
        display:flex ;
        height: 2px;
        width: 70px;
        background-color: black;
    
`

