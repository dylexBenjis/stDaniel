import React from 'react'
import { Container } from '../../GlobalLayout'
import { 
    SidebarCointainer,
    Icon,
    CloseIcon, 
    SidebarMenu,
    SidebarLink,
    SidebarWrapper,
    SidebarLinks,} from './Side_bar_elements'


const SideBar = ({IsOpen, scrollNav, ChangeOpen}) => {


    return (
        <SidebarCointainer IsOpen={IsOpen} scrollNav={scrollNav}>
            <Container>

            <SidebarWrapper>
                <SidebarMenu>
                    {/* <SidebarLink to='comingSunday' 
                                spy={true}
                                smooth={true}
                                offset={-100}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                onClick={ChangeOpen}>Next Sunday</SidebarLink> */}

                    <SidebarLink to='events' 
                                spy={true}
                                smooth={true}
                                offset={-100}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                onClick={ChangeOpen}>Anouncements</SidebarLink>
                    <SidebarLink to='about_us' 
                                spy={true}
                                smooth={true}
                                offset={-100}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                onClick={ChangeOpen}>About Us</SidebarLink>                    

                    {/* <SidebarLink to='project' 
                                spy={true}
                                smooth={true}
                                offset={-100}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                onClick={ChangeOpen}>Projects</SidebarLink> */}
    
                    {/* <SidebarLink to='harvest' 
                                spy={true}
                                smooth={true}
                                offset={-100}
                                hashSpy={true}
                                delay={200}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={500}
                                onClick={ChangeOpen}>Harvest</SidebarLink>    */}
        
                </SidebarMenu>
                </SidebarWrapper> </Container>
        </SidebarCointainer>
    )
}

export default SideBar
