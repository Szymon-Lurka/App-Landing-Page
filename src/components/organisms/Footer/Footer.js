import React from 'react'
import Logo from '../../atoms/Logo/Logo';
import NavButton from '../../atoms/NavButton/NavButton';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledWrapper,
    StyledNavWrapper,
    StyledList,
    StyledItem,
} from './FooterStyles';

const Footer = () => {
    return (
        <StyledWrapper>
            <Logo />
            <StyledNavWrapper>
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
                        <NavButton text="FAQ" />
                    </StyledItem>
                </StyledList>
            </StyledNavWrapper>
            <Paragraph text="Template created by Szymon Lurka. 2021." />
            <Paragraph text="Based on project by Arifur Rahman Tushar. 2019." />
        </StyledWrapper>
    );
}

export default Footer;