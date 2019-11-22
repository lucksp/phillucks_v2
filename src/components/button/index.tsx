import React from "react";
import { StyledButton } from "./button.css";

interface IButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  alt?: string;
}

const Button = ({ text, onClick, alt, className = "" }: IButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
      aria-label={alt}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
