import React, {useState, useEffect} from 'react'
import * as Ai from 'react-icons/ai'
import {
    DocumentationContainer,
    DocumentationList,
    DocumentationListItem,
    Title,
    Body,
    Divide
} from './DocumentationDataElements'
import { SidebarData } from './DocumentationDataset'
import { IconContext } from 'react-icons'

const DocumentationData = () => {
    return (
        <DocumentationContainer>
            <DocumentationList>
                {SidebarData.map((item, index) => {
                    return (
                        <DocumentationListItem key={index} id={item.id}>
                            <Title>{item.title}</Title>
                            <Divide/>
                            <Body>{item.body}</Body>
                        </DocumentationListItem>
                    )
                })}
            </DocumentationList>
        </DocumentationContainer>
    )
}

export default DocumentationData