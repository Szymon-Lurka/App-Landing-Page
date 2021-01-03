import React from 'react'
import styled from 'styled-components';
import NavButton from '../../atoms/NavButton/NavButton';
import Button from '../../atoms/Button/Button';
import Logo from '../../atoms/Logo/Logo';

const StyledNav = styled.nav`
width:80vw;
margin:0 auto;
display:flex;
justify-content:space-between;
`;
const StyledList = styled.ul`
display: flex;
width: 50%;
align-items:center;
justify-content:space-between;
@media(max-width:1366px) {
    width:70%;
}
`;
const StyledItem = styled.li`
list-style:none;
`;

const DesktopNavigation = () => {
    return (
        <StyledNav>
            <Logo />
            <StyledList>
                <StyledItem>
                    <NavButton text="Home" />
                </StyledItem>
                <StyledItem>
                    <NavButton text="Key Features" />
                </StyledItem>
                <StyledItem>
                    <NavButton text="Pricing" />
                </StyledItem>
                <StyledItem>
                    <NavButton text="Testiminial" />
                </StyledItem>
                <StyledItem>
                    <NavButton text="Faq" />
                </StyledItem>
                <StyledItem>
                    <Button text="Try for free" />
                </StyledItem>
            </StyledList>
        </StyledNav>
    );
}

export default DesktopNavigation;