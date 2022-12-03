import styled from 'styled-components';
import { Link } from 'react-scroll';

export const SideNavv= styled.div`
       
`
export const GoUp = styled(Link)`
    display: flex ;
    flex-direction: column ;
    position: fixed ;
    background-color:rgba(93,36,36,0.6) ;
    color: #fff ;
    height:3rem ;
    width: 3rem ; 
    right:${({scroll})=>(scroll?'100px':'-60px')};
    bottom: 70px ;
    font-size: 1rem ;
    border-radius:10px ;
    align-items: center ;
    justify-content:center ;
    z-index:10 ;
    transition: 0.1s all ease-in-out ;
    cursor: pointer;
    @media screen and (max-width:1300px){
            right: ${({scroll})=>(scroll?'3rem':'-3rem')};
            font-size: 1rem ;
        }
        @media screen and (max-width:600px){
            right: ${({scroll})=>(scroll?'1.7rem':'-3rem')};
            bottom:50px;
        }
        :hover{
            transform: scale(1.1) ;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
        }

`