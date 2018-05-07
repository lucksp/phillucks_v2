import React from "react";
import Index from "./Index";

const Home = () => {
  return (
    <div>
      <div id="index">
        <Index />
      </div>
      <div id="about">
        <h1>About</h1>
      </div>
      <div id="projects">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default Home;
