import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledParagraph = styled.p`
font-size: 1.6rem;
color: ${props => props.theme.paragraphColor};
font-weight: 600;
`;

const Paragraph = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledParagraph>
                {text}
            </StyledParagraph>
        </ThemeProvider>
    );
}

export default Paragraph;