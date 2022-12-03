import React, { useEffect, useState } from 'react'
import {SideNavv, GoUp} from './SideNav'
import { FaArrowUp } from 'react-icons/fa'

const SideNav = () => {

  const [scroll, setScroll] = useState();
  const X = () => {
    if(window.scrollY >= 150){
      setScroll(true);
    }
    else{setScroll(false)}
  }
  useEffect(()=>{
    window.addEventListener('scroll',X)
  },[X])

  console.log(scroll)

  return (
    <SideNavv>
      <GoUp scroll={scroll} to=' ' 
        spy={true}
        smooth={true}
        offset={-100}
        hashSpy={true}
        delay={200}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}><FaArrowUp/></GoUp>
    </SideNavv>
  )
}

export default SideNav
