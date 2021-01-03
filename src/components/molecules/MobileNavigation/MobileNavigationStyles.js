import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledNav = styled.nav`
width:100vw;
background-color:white;
height:50px;
position:fixed;
top:0;
left:0;
right:0;
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
`;
export const StyledListWrapper = styled.div`
position:fixed;
width:100vw;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100vw)'};
background-color: white;
height: 100vh;
top:0;
transition:.5s;
`;
export const StyledList = styled.ul`
height:80%;
width:100%;
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:left;
`;
export const StyledItem = styled.li`
list-style:none;

`;
export const StyledLink = styled(Link)`
font-size: 1.8rem;
color:white !important;
text-decoration:none;
position:relative;
text-decoration: none;
&.active {
    color:#7EE5FF !important;
}
`;

export const StyledHeading = styled.h2`
color: #fff !important;
`;