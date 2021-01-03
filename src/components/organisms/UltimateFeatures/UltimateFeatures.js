import React from 'react'
import {
    StyledWrapper,
    StyledHeadingWrapper,
    StyledParagraphsWrapper,
    StyledImg,
} from './UltimateFeaturesStyles';
import WhyUsParagraphs from '../../molecules/WhyUsParagraphs/WhyUsParagraphs';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import AppDev from '../../../assets/svg/AppDev.svg';
import Cloud from '../../../assets/svg/Cloud.svg';
import UX from '../../../assets/svg/UX.svg';
import Customer from '../../../assets/svg/Customer.svg';
import Telephone from '../../../assets/svg/Telephone.svg';
import Button from '../../atoms/Button/Button';

const UltimateFeatures = () => {
    return (
        <StyledWrapper>
            <StyledHeadingWrapper>
                <HeroHeading text="Ultimate features that we built" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely." />
            </StyledHeadingWrapper>
            <StyledParagraphsWrapper>
                <WhyUsParagraphs
                    text="App Development"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={AppDev}
                    left
                />
                <WhyUsParagraphs
                    text="App Development"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Cloud}
                    left
                />
                <WhyUsParagraphs
                    text="App Development"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={UX}
                    left
                />
                <WhyUsParagraphs
                    text="App Development"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Customer}
                    left
                />
            </StyledParagraphsWrapper>
            <StyledImg src={Telephone} />
            <Button text="See all" />
        </StyledWrapper>
    );
}

export default UltimateFeatures;