import React, {useState} from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'


const data1 = 
    {
        title:'Mass Times', 
        info:[
            {day:'SUNDAY', time:'00:00am', },
            {day:'wednesday', time:'00:00am',}
        ]
    }

const data2 = 
{
    title:'Confession Times', 
    info:[
        {day:'sunday', time:'00:00am', },
        {day:'monday', time:'00:00am', }
    ]
}

const data3 = 
    {
        title:'Adoration Times', 
        info:[
            {day:'sunday', time:'00:00am', },
            {day:'monday', time:'00:00am', }
        ]
    }

const Newfile = () => {

    const [infoClick1, setInfoClick1] = useState(false);
    const [infoClick2, setInfoClick2] = useState(false);
    const [infoClick3, setInfoClick3] = useState(false);

    const toggle=(e)=>{
        const id = e.currentTarget.id;
        console.log(id);
        if(id==='1'){
            setInfoClick1(true);
            setInfoClick2(false);
            setInfoClick3(false);
        }
        if(id==='2'){
            setInfoClick1(false);
            setInfoClick2(true);
            setInfoClick3(false);
        }
        if(id==='3'){
            setInfoClick1(false);
            setInfoClick2(false);
            setInfoClick3(true);
        }
       
    };

   console.log(infoClick1)
  return (
    <NewfileCon>
        <Container>
        <B>
                <InfoTable>

                    <InfoClick id='1' onClick={toggle}><div>{data1.title}</div>{infoClick1?(<div style={{fontSize:'30px'}}>-</div>):(<div style={{fontSize:'20px'}}>+</div>)}</InfoClick>
                    {infoClick1 && 
                    (<Info>
                        <FirstLine>{data1.title}</FirstLine> <Hr1/><br/>
                        {(data1.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                    <InfoClick id='2' onClick={toggle}><div>{data2.title}</div>{infoClick2?(<div style={{fontSize:'30px'}}>-</div>):(<div style={{fontSize:'20px'}}>+</div>)}</InfoClick>
                    {infoClick2 && 
                    (<Info>
                        <FirstLine>{data2.title} </FirstLine> <Hr1/><br/>
                        {(data2.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                    <InfoClick1 id='3' onClick={toggle}><div>{data3.title}</div>{infoClick3?(<div style={{fontSize:'30px'}}>-</div>):(<div style={{fontSize:'20px'}}>+</div>)}</InfoClick1>
                    {infoClick3 && 
                    (<Info>
                        <FirstLine>{data3.title}</FirstLine> <Hr1/><br/>
                        {(data3.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                </InfoTable>
                </B>
        </Container>
    </NewfileCon>
  )
}

export default Newfile

const NewfileCon = styled.div`
    margin-bottom:20px ;
`

const B = styled.div`
    display:flex ;
    height:auto ;
    width:100% ;
    z-index:2 ;
`

const InfoTable = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    z-index:2 ;
    
`

const InfoClick = styled.div`
    display:flex ;
    justify-content: space-between ;
    align-items:center ;
    height:40px ;
    width:100% ;
    background-color: gray ;
    font-size:16px ;
    z-index:1 ;
    cursor: pointer;
    padding:0px 10px ;
    border-bottom: 2px solid rgb(100,100,100) ;
`
const InfoClick1 = styled.div`
    display:flex ;
    justify-content: space-between ;
    align-items:center ;
    height:40px ;
    width:100% ;
    background-color: gray ;
    font-size:16px ;
    z-index:1 ;
    cursor: pointer;
    padding:0px 10px ;
`
const Hr1 = styled.div`
        display:flex ;
        height: 2px;
        width: 140px;
        background-color: #5d2424;
    
`
const Info = styled.div`
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
    height: 50px ;
    width:100% ;
    font-size:25px ;
    color: #5d2424 ;
`

const SecondLine = styled.div`
    display:flex ;
    flex-direction:row ;
    height:auto ;
    width:100% ; 
    justify-content:space-between ;
    align-items:center;
    gap:30px ;
    margin:5.5px 0px ;
    border-bottom: 1px solid gray ;
`

const Day = styled.div`
`

const Time = styled.div`
`
