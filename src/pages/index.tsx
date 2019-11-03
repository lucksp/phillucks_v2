import React from "react";
import Home from "./home";
import { Global } from "../Global.css";
import About from "./about";

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
      <Global />
      <Home moreScrollHandler={moreScrollHandler} />
      <About ref={moreRef} />
    </>
  );
};
