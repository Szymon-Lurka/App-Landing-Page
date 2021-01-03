import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 80vw;
margin: 280px auto 0;
position:relative;
`;
export const StyledHeadingWrapper = styled.div`
width: 30%;
@media(max-width:1500px) {
    width: 80%;
}
@media(max-width:1074px) {
    width: 100%;
}
`;
export const StyledParagraphsWrapper = styled.div`
display:grid;
width: 50%;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 150px;
margin-top: 120px;
margin-bottom: 50px;
@media(max-width:1074px) {
    grid-template-columns: 1fr;
    grid-template-rows:1fr;
    width:100%;
    grid-gap: 50px;
}
`;

export const StyledImg = styled.img`
position:absolute;
right: 0;
top: 150px;
width: 50%;
@media(max-width: 1672px) {
    top: 300px;
}
@media(max-width: 1227px) {
    top: 500px;
}
@media(max-width:1074px) {
   display:none;
}
`;