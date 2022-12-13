import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import Burger from './Burger'
import img from '../../Images/stdanielOnly.png'

const NavBar = ({toggle, isOpen}) => {

    const [scroll, setScroll] = useState(false);

    const Scroll = () => {
        if(window.scrollY>=200){
            setScroll(true);
        }
        else{
            setScroll(false)
        }
    }

    window.addEventListener('scroll', Scroll);
    console.log(scroll)

  return (
    <Nav>
        <Container>
            <NavWrapper>
                <Nav1>
                <LogoWrapper>
                    <Logo src={img} scroll={scroll}>

                    </Logo>
                    <Logo1 src={img} scroll={scroll}>

                    </Logo1>
                </LogoWrapper>
                <MobileIcon onClick={toggle} >
                    <Burger IsOpen={isOpen}/>
                </MobileIcon>
                </Nav1>

            </NavWrapper>
        </Container>
    </Nav>
  )
}

export default NavBar

const Nav= styled.div`
    display:flex ;
    height:auto ;
    width:100% ;
    position:fixed ;
    top:0 ;
    background-color: rgba(93,36,36) ;
    z-index:10;
`

const NavWrapper = styled.div`
    display:flex ;
    flex-direction:column ;
    height:80px ;
`
const Nav1 = styled.div`
    display: flex;
    align-items: center ;
    align-content: center ;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`
export const MobileIcon= styled.div`
    display: flex;
    justify-content:right ; 
`
export const LogoWrapper= styled.div` 
    height: 100%;
    width: auto;
    display: flex;
    justify-content: left;
    align-items: center;

`
const Logo = styled.img`
    display:flex ;
    height:100px ;
    width:60px;
    position:absolute ;
    left: ${({scroll})=>(scroll?'5px':'-90px')} ;
    transition: left 1s ease ;
    object-fit:contain ;

    @media screen and (min-width:1000px){
    display:none ;
    }
`
const Logo1 = styled.img`
    display:flex ;
    height:100px ;
    width:60px;
    position:absolute ;
    opacity: ${({scroll})=>(scroll?'1':'0')} ;
    transition: opacity 0.5s ease ;
    object-fit:contain ;

    @media screen and (max-width:1000px){
    display:none ;
    }
`