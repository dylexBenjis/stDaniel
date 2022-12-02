import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'

const ComingSundayActivities = () => {
  return (
    <ComingSundayActivitiesCon id='comingSunday'>
      <Container>
        <SundayWrapper>
          <A>
            <SmallHead>Coming</SmallHead>
            <BigHead>Sunday</BigHead>
            <HeadDate>MonthName DayNumber, Year.</HeadDate>
            <Hr1/>
          </A>
          <B>
            <BodyHead></BodyHead>
            <BodyText></BodyText>
          </B>
        </SundayWrapper>
      </Container>
    </ComingSundayActivitiesCon>
  )
}

export default ComingSundayActivities

const ComingSundayActivitiesCon = styled.div`
  z-index:1 ;
  height: 500px ;
  margin: 20px 0px;
`
const SundayWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
`
const A = styled.div`
  display:flex ;
  flex-direction: column ;
`
const B = styled.div`
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

const HeadDate = styled.div`
  font-size:12px ;
  font-family: monospace ;
`

const BodyHead = styled.div``

const BodyText = styled.div``

const Hr1 = styled.div`
        display:flex ;
        margin-top:10px ;
        height: 2px;
        width: 140px;
        background-color: #5d2424;
    
`