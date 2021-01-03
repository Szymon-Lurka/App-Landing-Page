import styled from 'styled-components';

export const StyledParagraphsWrapper = styled.div`
display:flex;
flex-direction:column;
width: 20%;
justify-content:flex-start;
align-items:flex-start;
@media(max-width:1074px) {
    width: 80%;
    margin-bottom: 25px;
}
`;