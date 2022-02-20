import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { contributionObj } from '../components/InfoSection/Data'
import ContributeSection from '../components/ContributeSection'
import Footer from '../components/Footer'

const Contribute = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <InfoSection {...contributionObj}/>
            <ContributeSection/>
            <Footer/>
        </>
    )
}

export default Contribute
