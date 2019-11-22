import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap');
@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");

    * {
        box-sizing: border-box;
    }
    body {
        font-family: ${p => p.theme.fonts.base};
        margin: 0;
        font-size: 14px;
    }

    h4 {
        font-size: 30px;
    }
`;
