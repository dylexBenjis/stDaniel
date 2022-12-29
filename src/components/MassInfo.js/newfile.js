import React, {useState} from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import Harvest from '../Harvest'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'


const data1 = 
    {
        title:'Mass Times', 
        info:[
            {day:'SUNDAY', time:'08:30 am', },
            {day:'Tuesday', time:'05:00 pm',}
        ]
    }

const data2 = 
{
    title:'Confession Times', 
    info:[
        {day:'Tuesday', time:'04:30 pm', },
    ]
}

const data3 = 
    {
        title:'Adoration Times', 
        info:[
            {day:'thursday', time:'--:-- am (Parish, Adamo)', },
        ]
    }


const Newfile = () => {

    const [infoClick1, setInfoClick1] = useState(false);
    const [infoClick2, setInfoClick2] = useState(false);
    const [infoClick3, setInfoClick3] = useState(false);
    const [infoClick4, setInfoClick4] = useState(false);

    const toggle=(e)=>{
        const id = e.currentTarget.id;
        console.log(id);
        if(id==='1'){
            setInfoClick1(!infoClick1);
            setInfoClick2(false);
            setInfoClick3(false);
            setInfoClick4(false);
        }
        if(id==='2'){
            setInfoClick1(false);
            setInfoClick2(!infoClick2);
            setInfoClick3(false);
            setInfoClick4(false);
        }
        if(id==='3'){
            setInfoClick1(false);
            setInfoClick2(false);
            setInfoClick3(!infoClick3);
            setInfoClick4(false);
        }
        if(id==='4'){
            setInfoClick1(false);
            setInfoClick2(false);
            setInfoClick3(false);
            setInfoClick4(!infoClick4);
        }
    };

   console.log(infoClick1)
  return (
    <NewfileCon>
        <Container>
        <B>
                <InfoTable>

                    <InfoClick1  infoClick1={infoClick1} id='1' onClick={toggle}><div>{data1.title}</div>{infoClick1?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</InfoClick1>
                    {infoClick1 && 
                    (<Info>
                        <FirstLine>{data1.title}</FirstLine> <Hr1/><br/>
                        {(data1.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                    <InfoClick  infoClick2={infoClick2} id='2' onClick={toggle}><div>{data2.title}</div>{infoClick2?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</InfoClick>
                    {infoClick2 && 
                    (<Info>
                        <FirstLine>{data2.title} </FirstLine> <Hr1/><br/>
                        {(data2.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                    <InfoClick  infoClick3={infoClick3} id='3' onClick={toggle} ><div>{data3.title}</div>{infoClick3?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</InfoClick>
                    {infoClick3 && 
                    (<Info>
                        <FirstLine>{data3.title}</FirstLine> <Hr1/><br/>
                        {(data3.info).map((q)=>{
                            return( <SecondLine key={q.day}>
                                <Day>{q.day}</Day>
                                <Time>{q.time}</Time>
                            </SecondLine>)})}
                    </Info>) }

                    <InfoClick id='4' onClick={toggle}><div>Harvest</div>{infoClick4?(<div style={{fontSize:'20px'}}><RiArrowUpSLine/></div>):(<div style={{fontSize:'20px'}}><RiArrowDownSLine/></div>)}</InfoClick>
                    {infoClick4 && <Harvest/> }

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
    border: 2px gray solid ;
    box-shadow: 10px 20px 40px gray ;
    
`

const InfoClick = styled.div`
    display:flex ;
    justify-content: space-between ;
    align-items:center ;
    height:50px ;
    width:100% ;
    background-color: rgba(190,190,190) ;
    font-size:20px ;
    z-index:1 ;
    cursor: pointer;
    padding:0px 10px ;
    border-top: 2px solid rgb(100,100,100) ;
`
const InfoClick1 = styled.div`
    display:flex ;
    justify-content: space-between ;
    align-items:center ;
    height:50px ;
    width:100% ;
    background-color:  rgba(190,190,190)  ;
    font-size:20px ;
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
    background-color: rgb(230,230,230) ;
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
    height:32px ;
    font-size:20px ;
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
