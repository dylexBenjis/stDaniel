import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import { family_data, state_data } from './data'
import Img from '../../Images/apple.png'
import Img2 from '../../Images/vine.png'
import Img3 from '../../Images/fruits.png'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

const Harvest = () => {

  const [family, setFamily] = useState(false);
  const [state, setState] = useState(false);

  const y = (e) =>{
    const id = e.currentTarget.id;
    if(id==='1'){
      setFamily(!family);
      setState(false);
    }
    if(id==='2'){
      setFamily(false);
      setState(!state);
    }
  }

  return (
    <HarvestCon id='harvest'>
      <ImageWrapper>
        <Image src={Img3}></Image>
      </ImageWrapper>
        <HarvestWrapper>
          <A>
            <BigHead>Harvest <img src={Img} style={{width:'30px', height:'30px',margin:'0px 0px -5px -5px'}}></img></BigHead>
            <Hr1/>
          </A>
          <FamilyThanksgiving>
            <Button1 id='1' onClick={y}><div>Family Thanksgiving next sunday</div>{family?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</Button1>
            {family && 
            <FamilyBody>
                        <FirstLine>The following families will be having their harvest thanksgiving next Sunday;</FirstLine><br/>

                            <SecondLine>
                                <Day>
                                  {(family_data).map((q)=>{
                                    return( <li style={{padding:'5px'}}>The family of {q.family}</li>)})} 
                                  </Day>
                            </SecondLine>          
            </FamilyBody>}
          </FamilyThanksgiving>
          <StateThanksgiving>
            <Button2 id='2' onClick={y}><div>State Thanksgiving next sunday</div>{state?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</Button2>
            {state && 
            <StateBody>
                        <FirstLine>The following state will be having their harvest thanksgiving next sunday;</FirstLine><br/>

                        <SecondLine>
                                <Day>
                                {(state_data).map((q)=>{
                                return( <li style={{padding:'5px'}}>{q.state} State</li>)})}
                                </Day>
                        </SecondLine>
            </StateBody>}
          </StateThanksgiving>
          <div style={{zIndex:'1'}}>The 2022 harvest has come to an end.</div>
        </HarvestWrapper>
    </HarvestCon>
  )
}

export default Harvest

const HarvestCon = styled.div`
  display:flex ;
  z-index:1 ;
  position:relative ;
  height: auto ;
  background-color:rgba(230,230,230,0.8) ;
  background-image:url(${Img2}) ;
  background-repeat: no-repeat ;
  background-position-x:center ;
  font-size:20px ;
  ::before{
    content:'' ;
    position:absolute ;
    top:0 ;
    left:0 ;
    bottom:0 ;
    right:0 ;
    background-color: rgba(255,255,255,0.8) ;
  }
`
const ImageWrapper = styled.div`
  display:flex ;
  position: absolute;
  top:0 ;
  left:0 ;
  right:0 ;
  bottom:0 ;
  z-index:-1 ;
`
const Image = styled.img`
  height:100%;
  width:100%;
  object-fit:contain ;
`

const HarvestWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
  width:100% ;
  gap:10px ;
  z-index:5 ;
  padding: 40px 5px ;
`
const A = styled.div`
  display:flex ;
  z-index:1 ;
  flex-direction: column ;
`

const BigHead = styled.div`
  font-size:32px ;
  font-family:monospace;
  font-weight:bolder ;  
  @media screen and (max-width:375px){
    font-size: 28px ;
  }
`
const Hr1 = styled.div`
  display:flex ;
  margin-top:10px ;
  height: 2px;
  width: 140px;
  background-color: #5d2424;
    
`
const FamilyThanksgiving = styled.div`
  display:flex ;
  flex-direction:column ;
  height:auto ;
  width:100% ;
  margin-top:10px ;
  z-index:1 ;
`

const StateThanksgiving = styled.div`
  display:flex ;
  flex-direction:column ;
  height:auto ;
  width:100% ;
  z-index:1 ;
`
const Button1 = styled.div`
    display:flex ;
    height:40px ;
    width:100% ;
    justify-content: space-between ;
    align-items:center ;
    background-color: rgb(190,190,190) ;
    font-size:20px ;
    z-index:1 ;
    cursor: pointer;
    padding:0px 10px ;
`

const Button2 = styled.div`
    display:flex ;
    height:40px ;
    width:100% ;
    justify-content: space-between ;
    align-items:center ;
    background-color: rgb(190,190,190) ;
    font-size:20px ;
    z-index:1 ;
    cursor: pointer;
    padding:0px 10px ;
`

const FamilyBody = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    background-color: rgba(200,200,200,0.8) ;
    padding: 10px 5px 20px 10px ;
`

const StateBody = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    background-color: rgba(200,200,200,0.8) ;
    padding: 10px 5px 20px 10px ;
`

const FirstLine = styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content: center ;
    align-items: left ;
    height: auto ;
    width:100% ;
    font-size:20px ;
`

const SecondLine = styled.div`
    display:flex ;
    flex-direction:row ;
    height:auto ;
    width:100% ; 
    align-items:center;
    gap:10px ;
    margin:0px 0px 5.5px 0px ;
`

const Day = styled.ol`
  font-size:20px ;
  padding:0px 5px 0px 20px ;
`


