import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'

const ChurchBuilding = () => {
  return (
    <ChurchBuildingCon id='project'>
      <Container>
        <ChurchBuildingWrapper>
        <A>
            <SmallHead>Project</SmallHead>
            <BigHead>Church building</BigHead>
            <Hr1/>
          </A>
        </ChurchBuildingWrapper>
      </Container>
    </ChurchBuildingCon>
  )
}

export default ChurchBuilding

const ChurchBuildingCon = styled.div`
  height: 500px ;
  z-index:1 ;
  margin:20px 0 ;
`
const ChurchBuildingWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
`
const A = styled.div`
  display:flex ;
  flex-direction: column ;
`
const SmallHead = styled.div`
  font-size:18px ;
  font-family: monospace ;
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