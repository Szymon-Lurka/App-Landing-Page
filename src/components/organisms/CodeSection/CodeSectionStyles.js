import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 80vw;
margin: 100px auto;
display:flex;
justify-content:space-between;
@media(max-width:1074px) {
    flex-direction:column;
}
`;
export const StyledImg = styled.img`
width:35%;
@media(max-width:1074px) {
    width: 70%;
}
`;
export const StyledParagraphsWrapper = styled.div`
width: 50%;
@media(max-width:1074px) {
    width: 100%;
}
`;