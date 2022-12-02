import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'

const Harvest = () => {
  return (
    <HarvestCon id='harvest'>
      <Container>
        <HarvestWrapper>
        <A>
            <BigHead>Harvest</BigHead>
            <Hr1/>
          </A>
        </HarvestWrapper>
      </Container>
    </HarvestCon>
  )
}

export default Harvest

const HarvestCon = styled.div`
  z-index:1 ;
  height: 500px ;
  margin:20px 0 ;
`
const HarvestWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
`
const A = styled.div`
  display:flex ;
  flex-direction: column ;
`

const BigHead = styled.div`
  font-size:25px ;
  font-family: Zen Dots, monospace;
  font-weight:bolder ;
`
const Hr1 = styled.div`
        display:flex ;
        margin-top:10px ;
        height: 2px;
        width: 140px;
        background-color: #5d2424;
    
`