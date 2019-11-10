import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap');

* {
    box-sizing: border-box;
}
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        font-size: 14px;
    }
`;
