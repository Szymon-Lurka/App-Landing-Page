import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
margin-top: 150px;
@media(max-width:1074px) {
    flex-direction: column;
}
`;
export const StyledImgWrapper = styled.div``;
export const StyledImg = styled.img`
border-radius: 50%;
margin-top: 100px;
@media(max-width:1074px) {
    margin-top: -50px;
    width:100%;
}
`;
export const StyledTextWrapper = styled.div`
width: 40%;
margin: 0 auto;
margin-bottom: 200px;
@media(max-width:1074px) {
    width: 80%;
    margin-bottom: 80px;
}
`;
