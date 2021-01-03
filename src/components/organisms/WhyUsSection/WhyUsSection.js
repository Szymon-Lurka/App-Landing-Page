import React from 'react'
import {
    StyledWrapper,
    StyledHeadingWrapper,
    StyledParagraphsWrapper,
} from './WhyUsSectionStyles';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import WhyUsParagraphs from '../../molecules/WhyUsParagraphs/WhyUsParagraphs';
import AppDev from '../../../assets/svg/AppDev.svg';
import Trophy from '../../../assets/svg/Trophy.svg';
import Cloud from '../../../assets/svg/Cloud.svg';
import Customization from '../../../assets/svg/Customization.svg';
import UX from '../../../assets/svg/UX.svg';
import Customer from '../../../assets/svg/Customer.svg';

const WhyUsSection = () => {
    return (
        <StyledWrapper>
            <StyledHeadingWrapper>
                <HeroHeading text="Why you should choose our app" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook." />
            </StyledHeadingWrapper>
            <StyledParagraphsWrapper>
                <WhyUsParagraphs
                    text="App Development"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={AppDev}
                />
                <WhyUsParagraphs
                    text="10 Times Award"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Trophy}
                />
                <WhyUsParagraphs
                    text="Cloud Storage"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Cloud}
                />
                <WhyUsParagraphs
                    text="Customization"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Customization}
                />
                <WhyUsParagraphs
                    text="UX Planning"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={UX}
                />
                <WhyUsParagraphs
                    text="Customer Support"
                    secondText="Get your blood tests delivered at home collect a sample from the news your blood tests."
                    src={Customer}
                />
            </StyledParagraphsWrapper>
        </StyledWrapper>
    );
}

export default WhyUsSection;