import React, {useState} from 'react'
import SideNav from '../components/SideNav/Navbar'
import DocumentationData from '../components/DocumentationData/DocumentationData'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const DocumentationPage = () => {
    return (
        <>
            <SideNav/>
            <DocumentationData/>
        </>
    )
}

export default DocumentationPage