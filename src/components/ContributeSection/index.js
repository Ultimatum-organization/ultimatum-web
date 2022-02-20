import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { 
    FormContainer,
    FormWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Form,
    Dropdown,
    Option,
    Input,
    Details,
    Vote,
    Up,
    Down,
    Title,
    Type,
    Description,
    InfoRow75
} from './ContributeSectionElements'
import {
    ButtonR,
    ButtonA,
    Button
} from '../ButtonElements'

const ContributeSection = () => {
  return (
    <FormContainer>
        <FormWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>Contribute An Idea To Ultimatum</TopLine>
                        <Form>
                            <Subtitle>Relevant GitHub Repository</Subtitle>
                            <Dropdown>
                                <Option>ultimatum-web</Option>
                            </Dropdown>
                            <Subtitle style={{marginTop: '20px'}}>Contribution Type</Subtitle>
                            <Dropdown>
                                <Option>Bug</Option>
                                <Option>Documentation</Option>
                                <Option>Enhancement</Option>
                            </Dropdown>
                            <Subtitle style={{marginTop: '20px'}}>Contribution Title</Subtitle>
                            <Input/>
                            <Subtitle style={{marginTop: '20px'}}>Contribution Details</Subtitle>
                            <Details/>
                            <Subtitle style={{marginTop: '40px'}}>By clicking submit, a poll will be created to decide whether your idea is worthwhile, if decided so, an issue will be created in the given GitHub repository with the chosen tag and details.</Subtitle>
                            <BtnWrap>
                                <Button to='bruh' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={1} dark={1} dark2={1}>Submit</Button>
                            </BtnWrap>
                        </Form>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <TextWrapper>
                        <TopLine>Vote On Recent Ideas</TopLine>
                        <Form>
                            <InfoRow75>
                                <Column1>
                                    <Title>Add a token to the chain</Title>
                                    <Type style={{marginTop: '20px'}}>Enhancement</Type>
                                    <Description style={{marginTop: '20px'}}>Ultimatum should have its own token so we can get paid</Description>
                                </Column1>
                                <Column2>
                                    <Vote>
                                        <Up>
                                            <FaArrowUp/>
                                        </Up>
                                        <Down>
                                            <FaArrowDown/>
                                        </Down>
                                    </Vote>
                                </Column2>
                            </InfoRow75>
                        </Form>
                    </TextWrapper>
                </Column2>
            </InfoRow>
        </FormWrapper>
    </FormContainer>
  )
}

export default ContributeSection