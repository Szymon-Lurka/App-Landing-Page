import React from 'react'
import LogoImg from '../../../assets/svg/AppLab.svg'
import styled from 'styled-components';

const StyledImg = styled.img`
cursor:pointer;
`;

const Logo = () => {
    return (
        <StyledImg src={LogoImg} />
    );
}
export default Logo;