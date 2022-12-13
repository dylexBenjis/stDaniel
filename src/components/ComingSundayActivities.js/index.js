import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import { data } from './data'

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
          <div style={{display:'flex',flexDirection:'column',gap:'10px',marginTop:'20px'}}>
          {data.map((q)=>{
          return(
            <B key={q.id}>
              <div>
              <BodyHead>{q.head}</BodyHead>
              <HeadDate>MonthName DayNumber, Year.</HeadDate>
              </div>
              <BodyText>{q.body}</BodyText>
            </B>
          )})
          }
          </div>
        </SundayWrapper>
      </Container>
    </ComingSundayActivitiesCon>
  )
}

export default ComingSundayActivities

const ComingSundayActivitiesCon = styled.div`
  z-index:1 ;
  height: auto;
  margin: 40px 0px;
`
const SundayWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
  gap:10px ;
`
const A = styled.div`
  display:flex ;
  flex-direction: column ;
`
const B = styled.div`
  display:flex ;
  flex-direction: column ;
  gap:5px ;
  justify-content:center ;
  border-bottom:2px solid rgb(80,80,80) ;
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

const BodyHead = styled.div`
  font-size:18px ;
  font-family: monospace;
  font-weight:bolder ;
`

const BodyText = styled.div`
  font-size:14px ;
  margin-bottom:7px ;
`
const HeadDate = styled.div`
  font-size:12px ;
  font-family: monospace ;
`

const Hr1 = styled.div`
        display:flex ;
        margin-top:10px ;
        height: 2px;
        width: 140px;
        background-color: #5d2424;
    
`