import React from "react";
import Button from "../../components/button";
import { StyledHome } from "./home.css";

const Home = () => {
  return (
    <StyledHome>
      <div>Phil</div>
      <div>Lucks</div>
      <Button text="learn more" />
    </StyledHome>
  );
};

export default Home;
