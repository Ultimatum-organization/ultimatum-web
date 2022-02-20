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
                    <SidebarLinkRoute to="/contribute" onClick={toggle}>Contribute</SidebarLinkRoute>
                    <SidebarLinkRoute to="/history" onClick={toggle}>Contribution History</SidebarLinkRoute>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/wallet" onClick={toggle}>Your Account</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
