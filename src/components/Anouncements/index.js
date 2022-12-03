import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'

const data = [
  {
    id:'1',
    head:'christmass',
    body:'ips fjkfjd kfjdjjfd djrhta the boy wds tieys kduuieham uudtlk ahe boy ws not even going to tell the people that he was csoming  to hte event'
  },
  {
    id:'2',
    head:'christmass',
    body:'ips fjkfjd kfjdjjfd djrhta the boy wds tieys kduuieham uudtlk ahe boy ws not even going to tell the people that he was csoming  to hte event'
  },
  {
    id:'3',
    head:'christmass',
    body:'ips fjkfjd kfjdjjfd djrhta the boy wds tieys kduuieham uudtlk ahe boy ws not even going to tell the people that he was csoming  to hte event'
  },
  {
    id:'4',
    head:'christmass',
    body:'ips fjkfjd kfjdjjfd djrhta the boy wds tieys kduuieham uudtlk ahe boy ws not even going to tell the people that he was csoming  to hte event'
  },
  {
    id:'5',
    head:'christmass',
    body:'ips fjkfjd kfjdjjfd djrhta the boy wds tieys kduuieham uudtlk ahe boy ws not even going to tell the people that he was csoming  to hte event'
  },
]

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
        </AnouncementsWrapper>
      </Container>
    </AnouncementsCon>
  )
}

export default Anouncements

const AnouncementsCon = styled.div`
  z-index:1 ;
  height: auto;
  margin:20px 0 ;
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
  gap:5px ;
`
const BodyHead = styled.div`
  font-size:18px ;
  font-family: monospace;
  font-weight:bolder ;
`

const BodyText = styled.div`
  font-size:14px ;
`
const HeadDate = styled.div`
  font-size:12px ;
  font-family: monospace ;
`