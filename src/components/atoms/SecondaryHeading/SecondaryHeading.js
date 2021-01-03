import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledHeading = styled.p`
font-size: 2rem;
color: ${props => props.theme.headingColor};
font-weight: 600;
//secondary color - props = secondary
${props => props.secondary && css`
color:${props => props.theme.headingSecondaryColor};
`}
//tertiary color - props = tertiary
${props => props.tertiary && css`
color:${props => props.theme.headingTertiaryColor};
`}
//quaternary color - props = quaternary
${props => props.quaternary && css`
color:${props => props.theme.headingQuaternaryColor}
`}
`;

const SecondaryHeading = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledHeading>
                {text}
            </StyledHeading>
        </ThemeProvider>
    );
}

export default SecondaryHeading;