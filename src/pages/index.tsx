import React from "react";
import Home from "./home";
import { Global } from "../Global.css";
import { Helmet } from "react-helmet";
import About from "./about";
import Portfolio from "./portfolio";
import { ThemeProvider } from "styled-components";
import favicon from "../assets/favicon.ico";
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Phil Lucks: Front End Software Engineer</title>
        <meta
          name="description"
          content="
          Phil Lucks, software engineer, software developer, denver software"
        />
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Global />
        <Home moreScrollHandler={moreScrollHandler} />
        <About ref={moreRef} />
        <VerticalGitHubContextProvider>
          <Portfolio />
        </VerticalGitHubContextProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
};
