import React from 'react'
import HeroHeading from '../../atoms/HeroHeading/HeroHeading';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import DownloadPic from '../../../assets/svg/DownloadPic.svg'
import AppStore from '../../../assets/svg/AppStore.svg';
import GooglePlay from '../../../assets/svg/GooglePlay.svg';
import {
    StyledWrapper,
    StyledTextWrapper,
    StyledImg,
    StyledImgWrapper
} from './DownloadOurAppStyles'

const DownlaodOurApp = () => {
    return (
        <StyledWrapper>
            <StyledTextWrapper>
                <HeroHeading text="Download our App now" />
                <Paragraph text="The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook." />
                <StyledImgWrapper>
                    <img src={GooglePlay} />
                    <img src={AppStore} />
                </StyledImgWrapper>
            </StyledTextWrapper>
            <StyledImg src={DownloadPic} />
        </StyledWrapper>
    );
}

export default DownlaodOurApp;