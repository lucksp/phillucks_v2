import React, { useState } from "react";
import { StyledFooter, StyledFooterItem } from "./footer.css";
import SVG from "react-inlinesvg";
import linkedInIcon from "../../assets/icn-linkedin.svg";
import emailIcon from "../../assets/icn-email.svg";
import githubIcon from "../../assets/icn-github.svg";

const FOOTERITEMS = {
  LINKEDIN: "linkedin",
  EMAIL: "email",
  GITHUB: "github"
};

const svgDimension = "40px";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterItem>
        <a href="https://www.linkedin.com/in/lucksp" target="_blank">
          <SVG
            width={svgDimension}
            height={svgDimension}
            src={linkedInIcon}
            description={FOOTERITEMS.LINKEDIN}
          />
        </a>
      </FooterItem>
      <FooterItem>
        <a
          href="mailto:lucksp@gmail.com?subject=phillucks.me website"
          target="_blank"
        >
          <SVG
            width={svgDimension}
            height={svgDimension}
            src={emailIcon}
            description={FOOTERITEMS.EMAIL}
          />
        </a>
      </FooterItem>
      <FooterItem>
        <a href="https://github.com/lucksp" target="_blank">
          <SVG
            width={svgDimension}
            height={svgDimension}
            src={githubIcon}
            description={FOOTERITEMS.GITHUB}
          />
        </a>
      </FooterItem>
    </StyledFooter>
  );
};

interface IFooterProps {
  handleClick?: (e: React.MouseEvent) => void;
}
const FooterItem: React.FC<IFooterProps> = ({ children, handleClick }) => {
  return (
    <StyledFooterItem>
      <div onClick={handleClick}>{children}</div>
    </StyledFooterItem>
  );
};
export default Footer;
