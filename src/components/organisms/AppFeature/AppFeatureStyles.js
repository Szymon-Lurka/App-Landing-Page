import styled from 'styled-components';

export const StyledWrapper = styled.div`
width: 80vw;
margin:150px auto;
display:flex;
@media(max-width:1074px) {
    flex-wrap:wrap;
    justify-content: center;
    align-items:center;
}
`;
export const StyledImgWrapper = styled.div`
flex-basis:50%;
margin-top: 150px;
`;
export const StyledImg = styled.img`
@media(max-width:1466px) {
    width: 90%;
}
@media(max-width:1300px) {
    width: 70%;
    margin-top: 250px;
}
@media(max-width: 1074px) {
    width: 100%;
    margin-top: -250px;
}
`;
export const StyledTextsWrapper = styled.div`
flex-basis:50%;
@media(max-width:1074px) {
    flex-basis: 100%;
}
`;
export const StyledHeadingWrapper = styled.div`
width:80%;
@media(max-width: 1074px) {
    width:100%;
    }
`;
