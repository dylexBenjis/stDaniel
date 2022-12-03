import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../GlobalLayout'
import img from '../Images/stdaniel.png'

const LoaderPage = ({loaderEnded, x, load}) => {

    const line1 = 'ST DANIEL';
    const line2 = 'HELP US END IN HOLINESS';

    // const [typed, setTyped]=useState('')

    // const [typedDone, setTypedDone] = useState(false)

    // useEffect(()=>{
    //     const timeout = setTimeout(()=>{
    //         setTyped(line1.slice(0, typed.length+1))                
    //     },  50);
        
    //     return ()=> clearTimeout(timeout)
    // }, [typed])

    // useEffect(()=>{    
    //     if(typed.length === line1.length){
    //     setTypedDone(true)
    //     }
    // },[typed])

    // console.log(typedDone)
    // const [typedd, setTypedd]=useState('')

    // useEffect(()=>{
    //     if(typedDone===true){
    //     const timeout = setTimeout(()=>{
    //         setTypedd(line2.slice(0, typedd.length+1))                
    //     },  50)
    //     return ()=> clearTimeout(timeout)}
    // }, [typedd, typedDone])

    const textStyle1 = {
        display:'flex',
        width:'100%',
        justifyContent:'left',
        fontSize:'35px',
        fontWeight:'bold',
        lineHeight:'40px',
        fontFamily:'Courgette',
        color: 'brown',
    }

    const textStyle2 = {
        display:'flex',
        width:'100%',
        justifyContent:'left',
        fontSize:'16px',
        fontWeight:'bold',
        lineHeight:'20px',
        fontFamily:'Courgette',
        color: 'brown',
    }


  return (
    <LoaderPageCon>

            <LoaderPageWrapper click={loaderEnded}>
                <ImageWrapper>
                    <Image src={img}></Image>
                </ImageWrapper>
            </LoaderPageWrapper>

    </LoaderPageCon>
  )
}

export default LoaderPage

const LoaderPageCon = styled.div`

`
const LoaderPageWrapper = styled.div`
    display: flex ;
    flex-direction: row;
    position: fixed ;
    top:0 ;
    left:0 ;
    bottom:0 ;
    right: 0;
    height:100vh ;
    width:100vw;
    background-color: white ;
    align-items:center ;
    justify-content:center ;
    opacity: ${({click})=>(click?'0':'1')} ;
    transition: opacity 1s ease ;

`
const ImageWrapper = styled.div`
    display:flex ;
    height:100% ;
    width:800px ; 


`
const Image = styled.img`
    height:100% ;
    width:100% ;
    object-fit:contain ;

`

const TextWrapper = styled.div`
    display: flex;
    flex-direction:column ;
    height: auto ;
    width: auto ;
`