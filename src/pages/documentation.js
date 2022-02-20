import React, {useState} from 'react'
import SideNav from '../components/SideNav/Navbar'
import SidebarData from '../components/DocumentationData/DocumentationDataset'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const DocumentationPage = () => {
    return (
        <>
            <SideNav/>
            <SidebarData/>
        </>
    )
}

export default DocumentationPage