import React, { forwardRef } from "react";
import { AboutContents, StyledAbout, PortfolioButton } from "./about.css";

interface AboutProps {
  portfolioScrollHandler: (e: React.MouseEvent) => void;
}
export const About = forwardRef(
  (props: AboutProps, ref: React.Ref<HTMLDivElement>) => {
    const { portfolioScrollHandler } = props;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      portfolioScrollHandler(e);
    };

    return (
      <StyledAbout ref={ref}>
        <AboutContents>
          <h4>Living at the intersection of UX, Business, and Technology.</h4>
          <div>
            <p>
              As a product-focused developer, building software with thoughtful
              User Experience at its core is my top priority. Seeing around
              corners, understanding the importance of a clean User Interface
              and working towards your business goals is how I help your product
              achieve success. I have experience in the core components of
              Javascript, HTML5, and CSS3 to build complete web based
              applications. By implemeting tools such as React, AngularJS,
              express.js, Node.js, and MongoDB, I am able to help develop rich
              applications.
            </p>
            <p>
              I spend my free time exploring Colorado's mountains on bike or on
              foot, travelling, listening to live music, photographing
              landscapes and urban environments, and sampling our state's fine
              selections of beer and whiskey options.
            </p>
          </div>
          <PortfolioButton
            className="portfolio-button"
            text="Click for some projects"
            onClick={handleClick}
            alt="more button"
          />
        </AboutContents>
      </StyledAbout>
    );
  }
);

export default About;
