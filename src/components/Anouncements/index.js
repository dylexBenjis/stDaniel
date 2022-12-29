import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import { data } from './data'

const Anouncements = () => {
  return (
    <AnouncementsCon id='events'>
      <Container>
        <AnouncementsWrapper>
        <A>
            <SmallHead>Upcoming</SmallHead>
            <BigHead>Events/Anouncements</BigHead>
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
        </AnouncementsWrapper>
      </Container>
    </AnouncementsCon>
  )
}

export default Anouncements

const AnouncementsCon = styled.div`
  z-index:1 ;
  height: auto;
  margin:40px 0 ;
`
const AnouncementsWrapper = styled.div`
  display:flex ;
  flex-direction: column ;
  gap:10px ;
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
  font-size:32px ;
  font-family: monospace;
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
const B = styled.div`
  display:flex ;
  flex-direction: column ;
  gap:10px ;  
  border-bottom:2px solid rgb(80,80,80) ;
`
const BodyHead = styled.div`
  font-size:24px ;
  font-family: monospace;
  font-weight:bolder ;
`

const BodyText = styled.div`
  font-size:20px ;
  margin-bottom: 10px ;
`
const HeadDate = styled.div`
  font-size:16px ;
  font-family: monospace ;
`