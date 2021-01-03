import React from 'react'
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledWrapper
} from './WhyUsParagraphsStyles';

const WhyUsParagraphs = ({ left, text, secondText, src }) => {
    return (
        <StyledWrapper left={left}>
            <img src={src} />
            <SecondaryHeading text={text} />
            <Paragraph text={secondText} />
        </StyledWrapper>
    );
}

export default WhyUsParagraphs;