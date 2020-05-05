import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.beauBlue};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`;
