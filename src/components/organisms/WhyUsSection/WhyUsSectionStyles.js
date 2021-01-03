import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:80vw;
margin: 0 auto;
display:flex;
flex-direction: column;
`;
export const StyledHeadingWrapper = styled.div`
width: 60%;
text-align:center;
align-self:center;
`;
export const StyledParagraphsWrapper = styled.div`
display:grid;
margin-top: 50px;
width: 70%;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
align-self:center;
grid-gap: 100px;
@media(max-width:1074px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}
`;