import styled from 'styled-components';

export const StyledWrapper = styled.div`
width:80vw;
margin: 0 auto;
`;
export const StyledHeadingWrapper = styled.div`
width: 80%;
text-align:center;
margin: 0 auto;
`;
export const StyledCardWrapper = styled.div`
width: 80%;
margin: 100px auto 0;
height: 57%;
display:flex;
justify-content:space-around;
@media(max-width:1300px) {
    flex-direction: column;
    width:60%;
}
@media(max-width: 600px) {
    width: 80%;
}
`;
export const StyledCard = styled.div`
width: 28%;
box-shadow: 0 0 8px #707070;
border-radius: 5px;
padding-bottom: 15px;
@media(max-width:1300px) {
    width: 100%;
    margin-top: 80px;
}
`;
export const StyledCardHeading = styled.div`
height:45%;
background-color:#DDD;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`;
export const StyledPrice = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-bottom: -90px;
margin-top: -20px;
@media(max-width:1300px) {
    margin-bottom: -50px;
}
`;
export const StyledCardDescription = styled.div`
height: 55%;
width:100%;
background-color:white;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
`;