import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
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
