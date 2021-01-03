import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';

const StyledLink = styled.a`
font-size:1.6rem;
color:${props => props.theme.primaryColor};
cursor:pointer;
transition:.2s;
&:hover {
    color:cadetblue;
}
`;

const NavButton = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledLink>
                {text}
            </StyledLink>
        </ThemeProvider>
    );
}

export default NavButton;