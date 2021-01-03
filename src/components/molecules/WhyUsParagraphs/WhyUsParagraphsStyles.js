import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:${({ left }) => left ? "left" : "center"};
justify-self: center;
align-items:${({ left }) => left ? "flex-start" : null};
@media(max-width:1074px) {
    width:100%;
}
`;