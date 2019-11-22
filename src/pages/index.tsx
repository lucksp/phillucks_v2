import React from "react";
import Home from "./home";
import { Global } from "../Global.css";
import About from "./about";
import Portfolio from "./portfolio";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { theme } from "./theme";
import { VerticalGitHubContextProvider } from "../context/useGitHubContext";
import Footer from "./footer";

export default () => {
  let moreRef = React.useRef<HTMLDivElement | null>(null);

  const moreScrollHandler = (e: React.MouseEvent) => {
    if (e.target && moreRef) {
      moreRef.current!.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home moreScrollHandler={moreScrollHandler} />
      <About ref={moreRef} />
      <VerticalGitHubContextProvider>
        <Portfolio />
      </VerticalGitHubContextProvider>
      <Footer />
    </ThemeProvider>
  );
};
