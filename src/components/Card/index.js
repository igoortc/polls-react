import styled, { css } from "styled-components";

export const Card = styled.div`
    background-color: ${({ theme } ) => theme.colors.beauBlue};
    width: ${props => props.small ? "250px" : "600px"};
    height: auto;
    margin: 20px 10px 20px 0;
    border-radius: 5px;
    padding: 10px;
    transition: 0.3s;
    cursor: ${props => props.cursor === "pointer" ? "pointer" : "default"};

    ${props => props.hover && css`
        &:hover {
            background-color: ${({ theme }) => theme.colors.frenchLilac};
            color: ${({ theme } ) => theme.colors.eerieBlack};
        }
    `}
`

export const CardTitle = styled.span`
  display: block;
  font-size: ${props => props.small ? ({ theme }) => theme.fontSizes.text : ({ theme }) => theme.fontSizes.subtitle};
  margin-bottom: ${props => props.noMargin ? "0" : "15px"};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

export const CardDescription = styled.span`
  display: block;
  font-size: ${props => props.small ? ({ theme }) => theme.fontSizes.small : ({ theme }) => theme.fontSizes.text};
`