import styled from 'styled-components'

export const FormContainer = styled.div`
    color: #fff;
    background: #f9f9f9;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const Form = styled.div`
    background-color: #101522;
    width: 500px;
    padding: 50px;
    border-radius: 25px;
`

export const Dropdown = styled.select`
    width: 100%;
    padding: 10px 5px 10px 5px;
    border: 0;
    border-radius: 5px
`

export const Option = styled.option`

`

export const Input = styled.input`
    width: 100%;
    padding: 10px 5px 10px 5px;
    border: 0;
    border-radius: 5px;
`

export const Details = styled.textarea`
    width: 100%;
    resize: vertical;
    padding: 10px 5px 10px 5px;
    border: 0;
    border-radius: 5px
`

export const Vote = styled.div`

`

export const Up = styled.a`
    text-decoration: none;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFAD05' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    padding: 0;
    width: 50px;
    height: 50px;
    margin-bottom: 5px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#FFAD05')};
    }
`

export const Down = styled.a`
    text-decoration: none;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFAD05' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    padding: 0;
    width: 50px;
    height: 50px;
    margin-top: 5px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#FFAD05')};
    }
`

export const Title = styled.p`
    max-width: 440px;
    margin-bottom:5px;
    font-size: 18px;
    line-height: 24px;
    color: #f7f8fa;
`

export const Type = styled.p`
    max-width: 440px;
    margin-bottom:5px;
    font-size: 14px;
    line-height: 24px;
    color: #010606;
    background-color: #f7f8fa;
    padding: 5px;
    border-radius: 20px;
    width: 125px;
    text-align: center;
`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom:5px;
    font-size: 16px;
    line-height: 24px;
    color: #f7f8fa;
`

export const FormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 150%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const InfoRow75 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr 3fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #FFAD05;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom:5px;
    font-size: 18px;
    line-height: 24px;
    color: #f7f8fa;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`