import React from "react";
import { StyledButton } from "./button.css";
import { string } from "prop-types";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return <StyledButton type="button">{text}</StyledButton>;
};

export default Button;
