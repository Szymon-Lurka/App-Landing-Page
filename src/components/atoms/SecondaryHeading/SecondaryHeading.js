import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledHeading = styled.p`
font-size: 2rem;
color: ${({ color, theme }) => color ? theme[color] : theme.headingColor};
font-weight: 600;
@media(max-width:1465px) {
    font-size:1.6rem;
}
@media(max-width:1221px) {
    font-size:1.4rem;
}
`;

const SecondaryHeading = ({ text, color }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledHeading color={color}>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}

export default SecondaryHeading;