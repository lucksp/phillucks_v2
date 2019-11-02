import React, { useEffect } from "react";
import { StyledHome, StyledFirstName, StyledLastName } from "./home.css";
import Button from "../../components/button";
import {
  VerticalScrollContextProvider,
  useScrollState
} from "../../context/useScrollContext";

const Home = () => {
  const { scrollY } = useScrollState();
  let homeRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked button");
  };
  return (
    <StyledHome ref={homeRef}>
      <div id="text-wrapper">
        <StyledFirstName scrollY={scrollY}>Phil</StyledFirstName>
        <StyledLastName scrollY={scrollY}>Lucks</StyledLastName>
      </div>
      <Button text="clicker" onClick={handleClick} />
    </StyledHome>
  );
};

export default () => (
  <VerticalScrollContextProvider>
    <Home />
  </VerticalScrollContextProvider>
);
