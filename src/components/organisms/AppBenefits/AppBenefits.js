import React from 'react'
import Benefits from '../../molecules/Benefits/Benefits';
import NetworkBenefits from '../../../assets/svg/NetworkBenefits.svg';
import RewardBenefits from '../../../assets/svg/RewardBenefits.svg';
import BillBenefits from '../../../assets/svg/BillBenefits.svg';
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledWrapper,
    StyledHeadingWrapper,
} from './AppBenefitsStyles';

const AppBenefits = () => {
    return (
        <>
            <StyledHeadingWrapper>
                <HeroHeading text="Smart jackpots that you may love this anytime & anywhere" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook." />
            </StyledHeadingWrapper>
            <StyledWrapper>
                <Benefits
                    src={BillBenefits}
                    text={'Automatic Payouts'}
                    secondText={'Get your blood tests delivered at home collect a sample from the news your blood tests.'}
                    color="headingTertiaryColor"
                />
                <Benefits
                    src={NetworkBenefits}
                    text={'Network Effect'}
                    secondText={'Get your blood tests delivered at home collect a sample from the news your blood tests.'}
                    color="headingSecondaryColor"
                />
                <Benefits
                    src={RewardBenefits}
                    text={'Bigger Rewards Method'}
                    secondText={'Get your blood tests delivered at home collect a sample from the news your blood tests.'}
                    color="headingQuaternaryColor"
                />
            </StyledWrapper>
        </>
    );
}

export default AppBenefits;