import React, { useState } from 'react'
import styled from 'styled-components'
import Anouncements from '../components/Anouncements/index.js'
import ChurchBuilding from '../components/ChurchBuilding/index.js'
import ComingSundayActivities from '../components/ComingSundayActivities.js'
import Footer from '../components/Footer'
import Harvest from '../components/Harvest/index.js'
import Hero from '../components/Hero'
import MassInfo from '../components/MassInfo.js'
import Newfile from '../components/MassInfo.js/newfile.js'
import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav/index.js'
import SideBar from '../components/Side_bar/index.js'
import BackImg from '../Images/stdaniel2.png'

const Pages = ({loaderEnded}) => {

  const [open, SetOpen] = useState(false);
  const ChangeOpen = () => {
    SetOpen(!open);
  }
  console.log(open)
  return (
    <PagesCon loaderEnded={loaderEnded}>
    <NavBar toggle={ChangeOpen} isOpen={open}/> 
    <SideBar IsOpen={open} ChangeOpen={ChangeOpen}/>
    <SideNav/>
    <Hero/>
    <PageDiv>
      <MassInfo/>
      <Newfile/>  
      {/* <ComingSundayActivities/>  */}
      <Anouncements/>
      {/* <ChurchBuilding/> */}
      <Footer/>     
    </PageDiv>   
    </PagesCon>

  )
}

export default Pages

const PagesCon = styled.div`
    opacity: ${({loaderEnded})=>(loaderEnded?'1':'0')} ;
    transition: opacity 3.5s ease ;
`
const PageDiv = styled.div`
  display:flex ;
  flex-direction:column ;
  position: relative;
  background-image:url(${BackImg}) ;
  background-repeat: no-repeat ;
  background-size:cover ;
  background-position-x:center ;
  ::before{
    content:'' ;
    position:absolute ;
    top:0 ;
    left:0 ;
    bottom:0 ;
    right:0 ;
    background-color:rgba(250,250,250,0.95) ;
  }
`