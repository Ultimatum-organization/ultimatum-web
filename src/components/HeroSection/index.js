import React, {useState} from 'react'
import Video from '../../videos/videoloop.mp4'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import { ButtonR } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Ultimatum</HeroH1>
                <HeroP>The open source Decentralized Autonomous Organization empowering the people.</HeroP>
                <HeroBtnWrapper>
                    <ButtonR to="/documentation" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Join The Revolution {hover ? <ArrowForward/> : <ArrowRight/>}</ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
