import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
width:85vw;
margin: 0 0 0 auto;
overflow:hidden;
`;
export const StyledTextWrapper = styled.div`
@media(max-width:600px) {
    width: 100%;
}
@media(max-width:1074px) {
    width: 60%;
}
`;
export const StyledImg = styled.img`
@media(max-width:1074px) {
    display:none;
}
`;
export const StyledImgWrapper = styled.div`
display:flex;
`;

export const StyledSmallImg = styled.img`
width: 100px;
`;