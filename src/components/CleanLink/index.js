import { Link as ReactRouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Link = styled.a`
  color: ${props => props.dark ? ({ theme }) => theme.colors.eerieBlack : ({ theme }) => theme.colors.beauBlue};
  text-decoration: none;
  border-bottom: 1px solid transparent;    
  transition: 0.3s;

  ${props => props.decorate && css`
    &:hover {
      border-bottom: 1px solid ${props => props.dark ? ({ theme }) => theme.colors.eerieBlack : ({ theme }) => theme.colors.beauBlue};
    }
  `}
`;

export const CleanLink = Link.withComponent(ReactRouterLink);
