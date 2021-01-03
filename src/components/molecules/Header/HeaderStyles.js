import styled from 'styled-components';

export const StyledHeader = styled.header`
width:100vw;
height:91.5vh;
position:relative;
display:flex;
justify-content:center;
align-items:flex-start;
@media(max-width:1465px) {
    height:100vh;
}
@media(max-width:1221px) {
    align-items:center;
    height:105vh;
}
@media(max-width:800px) {
    height:110vh;
}
`;
export const StyledImg = styled.img`
height: 25vh;
width:100%;
position:absolute;
bottom:0;
z-index:0;
`;
export const StyledWrapper = styled.div`
width:27%;
height:30%;
position:relative;
left: -320px;
top:150px;
z-index:1;
@media(max-width:1221px) {
    height: 40%;
    width:55%;
    left: 0;
    top:0;
}
@media(max-width:800px) {
width:90%;
}
`;

export const HeadingBackground = styled.div`
width: 362px;
height: 35px;
background-color:#E2EAED;
border-radius: 10px;
display:flex;
justify-content:flex-start;
align-items:center;
`;
export const StyledSpan = styled.span`
width:28px;
height:28px;
border-radius:50%;
background-color:#FEAA25;
margin-right: 7px;
margin-left: 7px;
`;