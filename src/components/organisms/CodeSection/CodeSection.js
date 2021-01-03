import React from 'react'
import {
    StyledWrapper,
    StyledImg,
    StyledParagraphsWrapper,
} from './CodeSectionStyles'
import Paragraph from '../../atoms/Paragraph/Paragraph';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Button from '../../atoms/Button/Button';
import CodeIntegration from '../../../assets/svg/CodeIntegration.svg';
const CodeSection = () => {
    return (
        <StyledWrapper>
            <StyledImg src={CodeIntegration} />
            <StyledParagraphsWrapper>
                <HeroHeading text="Designed & built by the latest code integration" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook." />
                <Button text="Learn more" />
            </StyledParagraphsWrapper>
        </StyledWrapper>
    );
}

export default CodeSection;