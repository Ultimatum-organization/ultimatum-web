import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Code Breakdown',
        path: 'codebreakdown',
        icon: <AiIcons.AiFillCode/>,
        class: 'nav-text'
    },

    {
        title: 'Hashing Algorithm',
        path: 'hashingalgorithm',
        icon: <FaIcons.FaHashtag/>,
        sub: true
    },

    {
        title: 'Mining Algorithm',
        path: 'miningalgorithm',
        icon: <AiIcons.AiFillCalculator/>,
        sub: true
    },

    {
        title: 'Difficulty',
        path: 'difficulty',
        icon: <AiIcons.AiFillControl/>,
        sub: true
    },

    {
        title: 'Mine Rate',
        path: 'minerate',
        icon: <FaIcons.FaStopwatch/>,
        sub: true
    },

    {
        title: 'Initial Balance',
        path: 'initialbalance',
        icon: <AiIcons.AiFillDollarCircle/>,
        sub: true
    },

    {
        title: 'Mining Reward',
        path: 'miningreward',
        icon: <FaIcons.FaMoneyBill/>,
        sub: true
    },

    {
        title: 'Transactions',
        path: 'transactions',
        icon: <FaIcons.FaHandshake/>,
        sub: true
    },

    {
        title: 'Transaction Pools',
        path: 'transactionpools',
        icon: <FaIcons.FaSwimmingPool/>,
        sub: true
    },

    {
        title: 'Wallets',
        path: 'wallets',
        icon: <FaIcons.FaWallet/>,
        sub: true
    },

    {
        title: 'Blocks',
        path: 'blocks',
        icon: <FaIcons.FaCube/>,
        sub: true
    },

    {
        title: 'Mining Blocks',
        path: 'miningblocks',
        icon: <FaIcons.FaMinus/>,
        sub: true
    },

    {
        title: 'Adding Blocks',
        path: 'addingblocks',
        icon: <FaIcons.FaPlus/>,
        sub: true
    },
    
    {
        title: 'Chain Validation',
        path: 'chainvalidation',
        icon: <FaIcons.FaCheck/>,
        sub: true
    },

    {
        title: 'P2P Connectivity',
        path: 'p2pconnectivity',
        icon: <FaIcons.FaHandsHelping/>,
        sub: true
    },

    {
        title: 'API Usage',
        path: 'apiusage',
        icon: <AiIcons.AiFillApi/>,
        class: 'nav-text'
    },

    {
        title: 'Smart Contracts',
        path: 'smartcontracts',
        icon: <AiIcons.AiFillBook/>,
        class: 'nav-text'
    }
]