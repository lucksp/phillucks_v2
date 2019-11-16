import React from "react";
import {
  StyledCard,
  StyledCardTitle,
  StyledCardBody,
  StyledCardFooter
} from "./card.css";

interface ICardProps {
  cardTitle: string | JSX.Element;
  cardBody: string | JSX.Element;
  cardFooter?: string | JSX.Element;
  className?: string;
}

const Card: React.FC<ICardProps> = ({
  cardTitle,
  cardBody,
  cardFooter,
  className = ""
}) => {
  return (
    <StyledCard className={className && className}>
      <StyledCardTitle>{cardTitle}</StyledCardTitle>
      <StyledCardBody className={className && className}>
        {cardBody}
      </StyledCardBody>
      <StyledCardFooter>{cardFooter}</StyledCardFooter>
    </StyledCard>
  );
};

export default Card;
