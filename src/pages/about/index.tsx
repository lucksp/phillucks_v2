import React, { forwardRef } from "react";
import { StyledAbout, AboutContents } from "./about.css";

const About = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <StyledAbout ref={ref}>
      <AboutContents>
        <h4>Living at the intersection of UX, Business, and Technology.</h4>
        <p>
          As a product-focused developer, building software with thoughtful User
          Experience at its core is my top priority. Seeing around corners,
          understanding the importance of a clean User Interface and working
          towards your business goals is how I help your product achieve
          success. I have experience in the core components of Javascript,
          HTML5, and CSS3 to build complete web based applications. By
          implemeting tools such as React, AngularJS, express.js, Node.js, and
          MongoDB, I am able to help develop rich applications.
        </p>
        <p>
          I spend my free time exploring Colorado's mountains on bike or on
          foot, travelling, listening to live music, photographing landscapes
          and urban environments, and sampling our state's fine selections of
          beer and whiskey options.
        </p>
      </AboutContents>
    </StyledAbout>
  );
});

export default About;
