import svg1 from '../../images/svg-1.svg'
import svg2 from '../../images/svg-5.svg'
import svg3 from '../../images/svg-3.svg'
import svg4 from '../../images/svg-4.svg'
import svg5 from '../../images/svg-5.svg'
import svg6 from '../../images/svg-6.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Open source DAO',
    headline: 'Building The Future',
    description: "Invest in the future by contributing to an organization which puts the people's needs first",
    buttonLabel: 'Learn More',
    imgStart: false,
    img: svg1,
    alt: 'crypto',
    dark: true,
    primary: true,
    darkText: false,
    destination: 'features',
    isLink: true,
    isRoute: true,
    destination: '/about'
}

export const homeObjTwo = {
    id: 'open-source',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Open Source',
    headline: 'Know Everything',
    description: 'Fully transparent and open source organization',
    buttonLabel: 'View The Code',
    imgStart: true,
    img: svg2,
    alt: 'peer-to-peer',
    dark: false,
    primary: false,
    darkText: true,
    isLink: true,
    destination: '//www.github.com'
}

export const homeObjThree = {
    id: 'web3',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Web 3.0',
    headline: 'Learn Web 3.0 With The Community',
    description: 'See the power of Web 3.0 in action with the Ultimatum community and decentralized development platform',
    buttonLabel: 'View The Docs',
    imgStart: false,
    img: svg4,
    alt: 'crypto',
    dark: false,
    primary: false,
    darkText: true,
    isLink: true,
    isRoute: true,
    destination: '/documentation'
}