import React from 'react'
import {
    StyledWrapper,
    StyledImgWrapper,
    StyledImg,
    StyledTextWrapper,
} from './ClientsSectionStyles'
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PeopleImg from '../../../assets/svg/Map.svg';
import SecondaryHeading from '../../atoms/SecondaryHeading/SecondaryHeading';

const ClientsSection = () => {
    return (
        <StyledWrapper>
            <StyledImgWrapper>
                <StyledImg src={PeopleImg} />
            </StyledImgWrapper>
            <StyledTextWrapper>
                <HeroHeading text="Meet Client Satisfaction by using product" />
                <Paragraph text="The rise of mobile devices transforms the way we consume elevant channels such as Facebook." />
                <SecondaryHeading text="User friendly & Customizable" />
                <Paragraph text="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring." />
            </StyledTextWrapper>
        </StyledWrapper>
    );
}

export default ClientsSection;