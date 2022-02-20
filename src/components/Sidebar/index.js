import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="features" onClick={toggle}>Features</SidebarLink>
                    <SidebarLinkRoute to="/documentation" onClick={toggle}>Documentation</SidebarLinkRoute>
                    <SidebarLinkRoute to="/history" onClick={toggle}>Blockchain History</SidebarLinkRoute>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/wallet" onClick={toggle}>Wallet</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
