import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"



export const SidebarCointainer = styled.aside`
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: auto;
    background: rgba(93,36,36);
    display: flex;
    margin-top: 80px ;
    transition: 0.2s all ease-in;
    top: ${({IsOpen})=>(IsOpen ? '0':'-100%')};

    @media screen and (min-width:700px){
        
    height: auto;
    }

`




export const SidebarWrapper= styled.div`
    color: #fff;
    margin: 5px 0px 15px 0px;
`
export const SidebarMenu= styled.div`
    display: grid;
    grid-template-columns: 60%;
    grid-template-rows: repeat(4, 30px);
    justify-content: center;
    row-gap:20px ;
`
export const SidebarLink= styled(Link)`
    display: flex;
    align-items: center; 
    justify-content: center;
    font-size: 0.9rem; font-family: monospace ;
    text-decoration: none; 
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--text-primary);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent ; //remove button background blue color onClick  
`
export const SidebarLinks= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem; font-family: monospace ;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--text-primary);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent ; //remove button background blue color onClick  
`
