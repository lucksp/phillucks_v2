import React from "react";
import {
  StyledHome,
  StyledFirstName,
  StyledLastName,
  HomeButton,
  StyledBackground
} from "./home.css";

import {
  VerticalScrollContextProvider,
  useScrollState
} from "../../context/useScrollContext";

interface IHomeProps {
  moreScrollHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Home = ({ moreScrollHandler }: IHomeProps) => {
  const { scrollY } = useScrollState();
  let homeRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    moreScrollHandler(e);
  };
  return (
    <StyledHome ref={homeRef}>
      <div id="text-wrapper">
        <StyledFirstName scrollY={scrollY}>Philip</StyledFirstName>
        <StyledLastName scrollY={scrollY}>Lucks</StyledLastName>
      </div>
      <HomeButton
        className="button-home"
        text="Find out more"
        onClick={handleClick}
        alt="more button"
      />
      <StyledBackground />
    </StyledHome>
  );
};

export default (props: IHomeProps) => (
  <VerticalScrollContextProvider>
    <Home {...props} />
  </VerticalScrollContextProvider>
);
