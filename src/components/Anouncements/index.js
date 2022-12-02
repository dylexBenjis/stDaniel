import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'

const Anouncements = () => {
  return (
    <AnouncementsCon id='events'>
      <Container>
        <AnouncementsWrapper>
        <A>
            <SmallHead>Upcoming</SmallHead>
            <BigHead>Events</BigHead>
            <Hr1/>
          </A>
          <B>
            <BodyHead></BodyHead>
            <BodyText></BodyText>
          </B>
        </AnouncementsWrapper>
      </Container>
    </AnouncementsCon>
  )
}

export default Anouncements

const AnouncementsCon = styled.div`
  z-index:1 ;
  height: 500px ;
  margin:20px 0 ;
`
const AnouncementsWrapper = styled.div`
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
const B = styled.div`
  display:flex ;
  flex-direction: column ;
`
const BodyHead = styled.div``

const BodyText = styled.div``