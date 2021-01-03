import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/variables';

const StyledButton = styled.button`
width:170px;
height:57px;
background-color:${props => props.theme.buttonColor};
color:white;
border-radius:40px;
border:none;
font-size: 1.6rem;
font-weight:600;
cursor:pointer;
transition: .2s;
&:hover {
    background-color:#CCC;
    color: ${props => props.theme.buttonColor};
}
`;

const Button = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <StyledButton>{text}</StyledButton>
        </ThemeProvider>
    );
}

export default Button;