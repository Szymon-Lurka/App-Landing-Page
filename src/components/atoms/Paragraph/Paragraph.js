import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';

const StyledParagraph = styled.p`
font-size: 1.6rem;
color: ${props => props.theme.paragraphColor};
font-weight: 600;
`;

const Paragraph = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledParagraph>
                {text}
            </StyledParagraph>
        </ThemeProvider>
    );
}

export default Paragraph;