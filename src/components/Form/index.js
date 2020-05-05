import styled from "styled-components";

export const FormSection = styled.div`
    margin: 15px 0;
`
export const FormSectionTitle = styled.span`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.text};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`