import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
*,
*::before,
*::after {
    box-sizing:border-box;
}
body {
    margin: 0;
    padding:0;
    font-family: 'Poppins', sans-serif;
    overflow-x:hidden;
}
html {
    font-size:62.5%;
}
`;

export default GlobalStyle;