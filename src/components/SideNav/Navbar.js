import React, {useState, useEffect} from 'react'
import {
    MenuLink,
    NavbarContainer,
    NavMenu,
    NavMenuItems,
    NavBarToggle,
    SidebarItem,
    Title,
    LinkItem,
    LinkItemN,
    PageTitle,
    NavbarContainer2,
    NavWrapper,
    LinkItemSub,
    SubIcon
} from './NavbarElements'
import { SidebarData } from './SidebarData'
import {animateScroll as scroll} from 'react-scroll'
import { IconContext } from 'react-icons'

const SideNav = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
    
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <NavMenu scrollNav={scrollNav}>
                    <NavMenuItems>
                        <SidebarItem>
                            <LinkItemN to="/">
                                <Title style={{paddingLeft: "0px"}}>OpenBC Docs</Title>
                            </LinkItemN>
                        </SidebarItem>
                        {SidebarData.map((item, index) => {
                            return (
                                <SidebarItem key={index}>
                                    {item.sub ? (
                                        <LinkItemSub to={item.path} smooth={true} duration={500} spy={true} exact='true' offset={-25}>
                                            {item.icon}
                                            <Title>{item.title}</Title>
                                        </LinkItemSub>
                                    ) :
                                    (
                                        <LinkItem to={item.path} smooth={true} duration={500} spy={true} exact='true' offset={-25}>
                                            {item.icon}
                                            <Title>{item.title}</Title>
                                        </LinkItem>
                                    )}
                                </SidebarItem>
                            )
                        })}
                    </NavMenuItems>
                </NavMenu>
            </IconContext.Provider>
        </>
    )
}

export default SideNav
