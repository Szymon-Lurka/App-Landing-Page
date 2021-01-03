import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:80vw;
margin:0 auto;
display:flex;
justify-content:space-between;
@media(max-width:1074px) {
    flex-direction: column;
    align-items: center;
}
`;
export const StyledHeadingWrapper = styled.div`
width:70vw;
margin: -150px auto 0;
display: flex;
justify-content:center;
align-items:center;
@media(max-width:1074px) {
    flex-direction: column;
    margin: -150px auto 50px;
    width:80vw;
}
`;