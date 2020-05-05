import styled, { css } from "styled-components";

export const PrimaryButton = styled.button`
    display: ${props => props.inline ? "inline-block" : "block"};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${props => props.disabled ? 
        ({ theme }) => theme.colors.cadetGrey :
        props => props.backgroundColor ?
            props.backgroundColor :
            ({ theme }) => theme.colors.yaleBlue};
    color: ${props => props.color ?
        props => props.color :
        ({ theme }) => theme.colors.beauBlue};
    padding: 8px 15px;
    margin: ${props => props.margin ? props.margin: 0};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    border-radius: 5px;
    transition: 0.3s;

    ${props => !props.disabled && css`
        &:hover {
            background-color: ${({ theme }) => theme.colors.frenchLilac};
        }
    `}
`

export const SmallButton = styled.button`
    display: ${props => props.inline ? "inline-block" : "block"};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${props => props.transparent ? 
        "transparent" :
        ({ theme }) => theme.colors.yaleBlue};
    color: ${({ theme }) => theme.colors.beauBlue};
    cursor: pointer;
    margin: ${props => props.margin ? props.margin: 0};
    border-radius: 5px;

    &:hover {
        background-color: ${props => props.transparent ? 
            "transparent" :
            ({ theme }) => theme.colors.frenchLilac};;
    }

    ${props => props.transparent && css`
        border: 0;
    `}
`