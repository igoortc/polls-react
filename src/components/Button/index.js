import styled, { css } from "styled-components";

export const Button = styled.button`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    background-color: ${props => props.disabled ? ({ theme }) => theme.colors.cadetGrey : ({ theme }) => theme.colors.yaleBlue};
    color: ${({ theme }) => theme.colors.beauBlue};
    padding: 8px 15px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    border-radius: 5px;
    transition: 0.3s;

    ${props => !props.disabled && css`
        &:hover {
            background-color: ${({ theme }) => theme.colors.frenchLilac};
        }
    `}
`