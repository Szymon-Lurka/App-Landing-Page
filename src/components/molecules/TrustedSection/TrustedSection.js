import React from 'react'
import Paragraph from '../../atoms/Paragraph/Paragraph';
import {
    StyledWrapper,
    StyledImgWrapper,
    StyledImage,
} from './TrustedSectionStyles';
import Southwest from '../../../assets/svg/Southwest.svg';
import Anubis from '../../../assets/svg/Anubis.svg';
import Alonzo from '../../../assets/svg/Alonzo.svg';
import Premium from '../../../assets/svg/Premium.svg';


const TrustedSection = () => {
    return (
        <StyledWrapper>
            <Paragraph text="Trusted by companies like" />
            <StyledImgWrapper>
                <StyledImage src={Southwest} />
                <StyledImage src={Anubis} />
                <StyledImage src={Alonzo} />
                <StyledImage src={Premium} />
            </StyledImgWrapper>
        </StyledWrapper>
    );
}

export default TrustedSection;