import React from 'react'
import styled from 'styled-components'
import { Container } from '../../GlobalLayout'
import img from '../../Images/stdaniel.png'

const Footer = () => {
  return (
    <FooterCon>
        <Container>
            <Footerwrapper>
                <A>
                <ImageWrapper>
                    <Image src={img}></Image>
                </ImageWrapper>
                </A>
                <Footer2>
                    <B>
                        <Head>                    
                            <TextHead> Location </TextHead>
                            <Hr></Hr>
                        </Head>
                        
                        <TextBody>
                            <div>
                            St Daniel's Catholic Church                            
                            </div>
                            <div>
                            Isiu Ikorodu                          
                            </div>
                            Ikorodu North L.G.A. Lagos, State.
                        </TextBody>
                    </B>
                    <B>
                        <Head>                    
                            <TextHead> Location </TextHead>
                            <Hr></Hr>
                        </Head>
                        
                        <TextBody>
                            <div>
                            St Daniel's Catholic Church                            
                            </div>
                            <div>
                            Isiu Ikorodu                          
                            </div>
                            Ikorodu North L.G.A. Lagos, State.
                        </TextBody>
                    </B>
                </Footer2>
                <TextBodyEnd> Copyright &copy; {(new Date().getFullYear())} St. Daniel Isiu. 
                            All Rights Reserved.
                </TextBodyEnd>
            </Footerwrapper>
        </Container>
    </FooterCon>
  )
}

export default Footer

const FooterCon = styled.div`
    display:flex ;
    background-color: rgba(255,255,255,0.8) ;
    z-index:1 ;
`

const Footerwrapper = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    gap:10px;
    margin: 10px 0px ;
`
const Footer2 = styled.div`
    display:flex ;
    flex-direction:column ;
    height:auto ;
    width:100% ;
    gap:25px;
    margin: 5px 0px 25px 0px;
`

const A = styled.div`
    display:flex ;
    height: 100px;
    width:100% ;
    justify-content:center ;
    align-items:center;
    padding:20px 0px;
`
const ImageWrapper = styled.div`
    display:flex ;
    height:100% ;
    width:80% ;

`
const Image = styled.img`
    height:100% ;
    width:100% ;
    object-fit:contain ;

`
const B = styled.div`
    display:flex ;
    flex-direction: column ;
    height:auto ;
    width:100% ;
    gap: 15px;
    align-items:center;
    justify-content:space-between ;

`
const Head = styled.div`
    display:flex ;
    flex-direction:column ;
    height: 32px ;
    width: 100% ;
    align-items:center;
    justify-content:space-between ;
`
const TextHead = styled.div`
    display:flex ;
    font-size:20px ;

`
const Hr = styled.div`
        display:flex ;
        height: 2px;
        width: 50px;
        background-color: black;
    
`
const TextBody = styled.div`
    display:flex ;
    flex-direction:column ;
    font-size:12px ;
    justify-content:center ;
    align-items:center ;

`
const TextBodyEnd = styled.div`
    display:flex ;
    flex-direction:column ;
    font-size:10px ;
    justify-content:center ;
    align-items:center ;

`