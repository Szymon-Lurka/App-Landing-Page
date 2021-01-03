import React from 'react'
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledParagraphWrapper,
    StyledParagraphTextWrapper,
    StyledParagraphImg,
} from './FeaturesParagraphStyles';

const FeaturesParagraph = ({ src, secondary, text, secondText, color }) => {
    return (
        <StyledParagraphWrapper>
            <StyledParagraphImg src={src} />
            <StyledParagraphTextWrapper>
                <SecondaryHeading text={text} secondary={secondary} color={color} />
                <Paragraph text={secondText} />
            </StyledParagraphTextWrapper>
        </StyledParagraphWrapper>
    );
}
export default FeaturesParagraph;