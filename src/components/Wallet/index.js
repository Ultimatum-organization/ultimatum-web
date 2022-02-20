import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './WalletElements'

const Wallet = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">OpenBC</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>View wallet balance and trade</FormH1>
                            <FormLabel htmlFor='for'>Wallet Address</FormLabel>
                            <FormInput type='text' maxLength='64' required/>
                            <FormButton type='submit'>Check Balance</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Wallet
