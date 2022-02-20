import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const MenuLink = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`

export const NavbarContainer = styled.div`
    background-color: #010606;
    height: 80px;
    display: flex;
    align-items: center;
`

export const NavMenu = styled.nav`
    background-color: #FFAD05;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    transition: 850ms;
    overflow-x: hidden;
    overflow-y: auto;
`

export const NavWrapper = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
`

export const NavbarContainer2 = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const PageTitle = styled.h1`
    transition: 850ms;
    padding-left: ${({sidebar}) => (sidebar ? '160px' : '0')};
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 32px;
    font-weight: bold;
    text-decoration: none;
`

export const NavMenuItems = styled.ul`
    width: 100%;
`

export const NavBarToggle = styled.li`
    background-color: #FFAD05;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    position: sticky;
`

export const SidebarItem = styled.li`

`

export const Title = styled.h2`
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 4px;
`

export const LinkItem = styled(LinkS)`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    border-radius: 4px;
    margin: 16px;
    cursor: pointer;

    &:hover {
        background-color: #01ac66;
    }
`

export const LinkItemN = styled(Link)`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    border-radius: 4px;
    margin: 16px;

    &:hover {
        background-color: #01ac66;
    }
`

export const LinkItemSub = styled(LinkS)`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    border-radius: 4px;
    margin: 16px;
    margin-left: 48px;
    cursor: pointer;

    &:hover {
        background-color: #01ac66;
    }
`

export const NavContainer = styled.div`
    background-color: black;
`