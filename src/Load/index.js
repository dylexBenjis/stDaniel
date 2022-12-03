import React from 'react'
import styled from 'styled-components'

const Load = ({load}) => {
  return (
    <LoadCon load={load}>

    </LoadCon>
  )
}

export default Load

const LoadCon = styled.div`
    height:100vh ;
    width:100vw ;
    background-color:red ;
    display:flex ;
    z-index:${({load})=>(load? '-100': '100')} ;
`