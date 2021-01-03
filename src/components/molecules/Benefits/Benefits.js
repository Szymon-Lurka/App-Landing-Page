import React from 'react'
import { StyledParagraphsWrapper } from './BenefitsStyles';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';
const Benefits = ({ text, secondText, color, src }) => {
    return (
        <StyledParagraphsWrapper>
            <img src={src} />
            <SecondaryHeading text={text} color={color} />
            <Paragraph text={secondText} />
        </StyledParagraphsWrapper>
    );
}

export default Benefits;