import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import { family_data, state_data } from './data'

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
      <Container>
        <HarvestWrapper>
          <A>
            <BigHead>Harvest</BigHead>
            <Hr1/>
          </A>
          <FamilyThanksgiving>
            <Button1 id='1' onClick={y}><div>Family Thanksgiving next sunday</div>{family?(<div style={{fontSize:'25px'}}>-</div>):(<div style={{fontSize:'20px'}}>+</div>)}</Button1>
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
            <Button2 id='2' onClick={y}><div>State Thanksgiving next sunday</div>{state?(<div style={{fontSize:'25px'}}>-</div>):(<div style={{fontSize:'20px'}}>+</div>)}</Button2>
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
          <div>The 2022 harvest has come to an end.</div>
        </HarvestWrapper>
      </Container>
    </HarvestCon>
  )
}

export default Harvest

const HarvestCon = styled.div`
  z-index:1 ;
  height: auto ;
  margin:40px 0 ;
  background-color: #fff ;
`
const HarvestWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
  gap:10px ;
  padding: 40px 0px ;
`
const A = styled.div`
  display:flex ;
  flex-direction: column ;
`

const BigHead = styled.div`
  font-size:25px ;
  font-family:monospace;
  font-weight:bolder ;
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
`

const StateThanksgiving = styled.div`
  display:flex ;
  flex-direction:column ;
  height:auto ;
  width:100% ;
`
const Button1 = styled.div`
    display:flex ;
    height:40px ;
    width:100% ;
    justify-content: space-between ;
    align-items:center ;
    background-color: gray ;
    font-size:16px ;
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
    background-color: gray ;
    font-size:16px ;
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
    font-size:16px ;
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
  font-size:16px ;
  padding:0px 5px 0px 20px ;
`


