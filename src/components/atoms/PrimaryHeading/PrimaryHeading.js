import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';

const StyledHeading = styled.p`
font-size: 3.6rem;
color: ${props => props.theme.headingColor};
font-weight: 600;
@media(max-width:1465px) {
    font-size:2.8rem;
}
@media(max-width:1221px) {
    font-size:2rem;
}
`;

const PrimaryHeading = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledHeading>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}

export default PrimaryHeading;