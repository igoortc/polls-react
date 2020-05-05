import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.beauBlue};
  text-decoration: none;
`;

export const CleanLink = Link.withComponent(ReactRouterLink);
