import React, { FC } from "react";
import Helmet from "react-helmet";
import Home from "../pages/home";
import { VerticalScrollContextProvider } from "../context/useScrollContext";
import About from "../pages/about";
import { VerticalGitHubContextProvider } from "../context/useGitHubContext";
import Portfolio from "../pages/portfolio";
import Footer from "../pages/footer";

const Layout: FC = () => {
  let moreRef = React.useRef<HTMLDivElement>(null);
  let portRef = React.useRef<HTMLDivElement>(null);

  const moreScrollHandler = (e: React.MouseEvent) => {
    if (e.target && moreRef) {
      moreRef.current!.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const portfolioScrollHandler = (e: React.MouseEvent) => {
    if (e.target && moreRef) {
      portRef.current!.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet />
      <VerticalScrollContextProvider>
        <Home moreScrollHandler={moreScrollHandler} />
      </VerticalScrollContextProvider>
      <About ref={moreRef} portfolioScrollHandler={portfolioScrollHandler} />
      <VerticalGitHubContextProvider>
        <Portfolio ref={portRef} />
      </VerticalGitHubContextProvider>
      <Footer />
    </>
  );
};

export default Layout;
