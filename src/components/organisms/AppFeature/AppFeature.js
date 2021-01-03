import React from 'react'
import {
    StyledWrapper,
    StyledImgWrapper,
    StyledImg,
    StyledTextsWrapper,
    StyledHeadingWrapper,
} from './AppFeatureStyles';
import FeatureImg from '../../../assets/svg/Feature.svg';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import SpeedFeature from '../../../assets/svg/SpeedFeature.svg';
import PrototypeFeature from '../../../assets/svg/PrototypeFeature.svg';
import DrawFeature from '../../../assets/svg/DrawFeature.svg';
import FeaturesParagraph from '../../molecules/FeaturesParagraph/FeaturesParagraph';
import Paragraph from '../../atoms/Paragraph/Paragraph';
const AppFeature = () => {
    const firstColor = "headingTertiaryColor";
    const secondColor = "headingSecondaryColor";
    const thirdColor = "headingQuaternaryColor"
    return (
        <StyledWrapper>
            <StyledImgWrapper>
                <StyledImg src={FeatureImg} />
            </StyledImgWrapper>
            <StyledTextsWrapper>
                <StyledHeadingWrapper>
                    <HeroHeading
                        text="Awesome apps features" />
                    <Paragraph
                        text="Increase productivity with a simple to-do app. App for managing your personal budgets." />
                </StyledHeadingWrapper>
                <FeaturesParagraph
                    text="Fast Performance"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={SpeedFeature}
                    color={firstColor}
                />
                <FeaturesParagraph
                    text="Prototyping"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={PrototypeFeature}
                    color={secondColor}
                />
                <FeaturesParagraph
                    text="Vector Editing"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={DrawFeature}
                    color={thirdColor}
                />
            </StyledTextsWrapper>
        </StyledWrapper>
    );
}

export default AppFeature;