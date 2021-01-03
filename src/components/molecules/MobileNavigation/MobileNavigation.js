import React, { useState } from 'react';
import {
    StyledNav,
    StyledList,
    StyledListWrapper,
    StyledItem,
    StyledHeading,
} from './MobileNavigationStyles';
import Burger from '../../atoms/Burger/Burger';
import Button from '../../atoms/Button/Button';
import NavButton from '../../atoms/NavButton/NavButton';
import Logo from '../../atoms/Logo/Logo';

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    }
    const handleLinkClick = () => {
        setIsOpen(false);
    }
    return (
        <>
            <StyledNav>
                <Logo />
                <Burger handleclick={handleBurgerClick} isOpen={isOpen} onClick={handleBurgerClick} />
                <StyledListWrapper open={isOpen}>
                    <StyledList>
                        <StyledItem>
                            <NavButton
                                onClick={handleLinkClick}
                                text="Home"
                            />
                        </StyledItem>
                        <StyledItem>
                            <NavButton
                                onClick={handleLinkClick}
                                text="Key Features" />
                        </StyledItem>
                        <StyledItem>
                            <NavButton
                                onClick={handleLinkClick}
                                text="Pricing" />
                        </StyledItem>
                        <StyledItem>
                            <NavButton
                                onClick={handleLinkClick}
                                text="Testiminial" />
                        </StyledItem>
                        <StyledItem>
                            <NavButton
                                onClick={handleLinkClick}
                                text="FAQ" />
                        </StyledItem>
                        <StyledItem>
                            <Button text="Try for free" />
                        </StyledItem>
                    </StyledList>
                </StyledListWrapper>
            </StyledNav >
        </>
    );
}

export default MobileNavigation;