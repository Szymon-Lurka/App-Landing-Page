import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledHeading = styled.p`
font-size: 6rem;
color: ${props => props.theme.headingColor};
font-weight:600;
margin-bottom: ${({ mb }) => mb};
margin-top: ${({ mt }) => mt};
line-height: 70px;
@media(max-width:1465px) {
    font-size:5rem;
}
@media(max-width:1221px) {
    font-size:4rem;
}
`;

const HeroHeading = ({ text, mb, mt }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledHeading mb={mb} mt={mt}>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}


export default HeroHeading;
