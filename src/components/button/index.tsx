import React from "react";
import { StyledButton } from "./button.css";
import { string } from "prop-types";

interface IButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
