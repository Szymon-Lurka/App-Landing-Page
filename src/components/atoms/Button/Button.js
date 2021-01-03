import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';
import GlobalStyle from '../../../assets/styles/globalStyles';

const StyledButton = styled.button`
width:170px;
height:57px;
background-color:${props => props.theme.buttonColor};
color:white;
border-radius:40px;
border:none;
font-size: 1.6rem;
font-weight:600;
`;

const Button = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledButton>{text}</StyledButton>
        </ThemeProvider>
    );
}

export default Button;