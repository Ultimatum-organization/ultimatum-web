import React from 'react'
import Icon2 from '../../images/svg-2.svg'
import Icon1 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-7.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="features">
            <ServicesH1>Features</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Self Dependent</ServicesH2>
                    <ServicesP>Decentralized blockchain which runs outside of other chains</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>A Proper DAO</ServicesH2>
                    <ServicesP>Fully open and secure voting schema to make decisions</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Power To The People</ServicesH2>
                    <ServicesP>A DAO which puts the code in the hands of the community</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
