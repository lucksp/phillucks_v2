import React from "react";
import { StyledHome, StyledFirstName, StyledLastName } from "./home.css";
import Button from "../../components/button";

const Home = () => {
  let firstNameRef = React.useRef();
  let lastNameRef = React.useRef();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked button");
  };
  return (
    <StyledHome>
      <div id="text-wrapper">
        <StyledFirstName>Phil</StyledFirstName>
        <StyledLastName>Lucks</StyledLastName>
      </div>
      <Button text="clicker" onClick={handleClick} />
    </StyledHome>
  );
};

export default Home;
