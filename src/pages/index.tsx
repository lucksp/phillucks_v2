import React from "react";
import Home from "./home";
import { Global } from "../Global.css";

export default () => {
  let moreRef = React.useRef<HTMLDivElement | null>(null);

  const moreScrollHandler = (e: React.MouseEvent) => {
    if (e.target) {
    }
  };
  return (
    <>
      <Global />
      <Home moreScrollHandler={moreScrollHandler} />
      <div ref={moreRef} style={{ height: "100vh" }}>
        2ndDiv
      </div>
    </>
  );
};
