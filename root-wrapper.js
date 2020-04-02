import React from "react";
import { ThemeProvider } from "styled-components";
import { Global } from "./src/Global.css";
import { theme } from "./src/pages/theme";
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <Layout>{element}</Layout>
  </ThemeProvider>
);
