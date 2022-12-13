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
                    <B1>
                        <Head>                    
                            <TextHead> Location </TextHead>
                            <Hr></Hr>
                        </Head>
                        
                        <TextBody>
                            <div>
                            St Daniel's Catholic Church                            
                            </div>
                            <div>
                            Isiu Junction Ikorodu                          
                            </div>
                            <div>Ikorodu North L.G.A. </div>
                            Lagos, State.
                        </TextBody>
                    </B1>
                    <B>
                        <Head>                    
                            <TextHead>Find Us </TextHead>
                            <Hr></Hr>
                        </Head>
                        
                        <TextBody>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.716584576472!2d3.613384646594376!3d6.663481652351667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be712316edac1%3A0x544533f09978b5cf!2sFADEK%20Petrol%20Station!5e0!3m2!1sen!2sus!4v1670259454366!5m2!1sen!2sus" style={{border:'none', width:'100%'}}  height='250' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
    @media screen and (min-width:1300px){
        flex-direction:row ;
    }
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

`
const B1 = styled.div`
    display:flex ;
    flex-direction: column ;
    height:100px ;
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
    align-items:center ;

`
const TextBodyEnd = styled.div`
    display:flex ;
    flex-direction:column ;
    font-size:10px ;
    justify-content:center ;
    align-items:center ;

`