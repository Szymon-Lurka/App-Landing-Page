import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
margin-top: 50px;
`;

export const StyledImgWrapper = styled.div`
width:80%;
margin: 50px auto;
display:flex;
justify-content:space-around;
@media(max-width: 1024px) {
    flex-wrap:wrap;
}
`;

export const StyledImage = styled.img`
width: 13%;
@media(max-width:1024px) {
    width:40%;
    margin-bottom: 150px;
}
`;