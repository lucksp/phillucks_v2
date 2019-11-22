import React from "react";
import { StyledPill } from "./pill.css";

export interface IPillProps {
  handeClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const Pill: React.FC<IPillProps> = ({
  handeClick,
  children,
  className = ""
}) => {
  return (
    <StyledPill onClick={handeClick} className={className}>
      {children}
    </StyledPill>
  );
};

export default Pill;
