import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import img from '../../Images/stdaniel.png'

const Hero = () => {
  return (
    <HeroCon>
        <Container>
            <Nav2>
                <ImageWrapper>
                    <Image src={img}></Image>
                </ImageWrapper>
            </Nav2>
        </Container>
    </HeroCon>
  )
}

export default Hero

const HeroCon = styled.div`
    margin-top: 80px ;
    background-color: rgb(255,255,255) ;
`


const Nav2 = styled.div`
    display:flex ;
    flex-direction:row ;
    height:calc(100vh*0.2);
    width:100% ;

    justify-content:center ;
    align-items:center;
    padding:10px 0px;
`
const ImageWrapper = styled.div`
    display:flex ;
    height:100% ;
    width:80% ;

`
const Image = styled.img`
    height:100% ;
    width:100% ;
    object-fit:contain ;

`