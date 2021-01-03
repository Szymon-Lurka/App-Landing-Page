import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledHeading = styled.p`
font-size: 6rem;
color: ${props => props.theme.headingColor};
font-weight:600;
`;

const HeroHeading = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledHeading>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}


export default HeroHeading;
