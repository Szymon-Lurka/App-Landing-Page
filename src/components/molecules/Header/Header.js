import React from 'react'
import HeaderImg from '../../../assets/svg/Phone.svg'
import {
    HeadingBackground,
    StyledHeader,
    StyledImg,
    StyledSpan,
    StyledWrapper,
} from './HeaderStyles';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';
import Button from '../../../components/atoms/Button/Button';

const Header = () => {
    return (
        <StyledHeader>
            <StyledWrapper>
                <HeadingBackground>
                    <StyledSpan />
                    <SecondaryHeading text="#1 Editiors Choice App Of 2020" />
                </HeadingBackground>
                <HeroHeading text="Best app for your modern lifestyle" mb="-15px" mt="10px" />
                <Paragraph text="Increase productivity with a simple to-do app. App for managing your personal budgets." />
                <Button text="Try for free" />
            </StyledWrapper>
            <StyledImg src={HeaderImg} />
        </StyledHeader>
    );
}

export default Header;