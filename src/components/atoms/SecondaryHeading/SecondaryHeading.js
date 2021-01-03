import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';

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
            <StyledHeading color={color}>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}

export default SecondaryHeading;