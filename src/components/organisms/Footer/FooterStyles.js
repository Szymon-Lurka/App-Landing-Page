import styled from 'styled-components';

export const StyledWrapper = styled.div`
height: 567px;
width:100vw;
background-color:#09142E;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;
export const StyledNavWrapper = styled.div`
display:flex;
`;
export const StyledList = styled.ul`
display:flex;
justify-content: space-between;
width: 500px;
margin: 50px auto;
@media(max-width:1074px) {
    flex-direction: column;
    align-items:center;
}
`;
export const StyledItem = styled.li`
list-style:none;
color:white;
text-transform:uppercase;
`;