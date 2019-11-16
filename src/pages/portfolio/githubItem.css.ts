import styled from "styled-components";
import Card from "../../components/card";
import Pill from "../../components/pill";
import {
  StyledCardBody,
  StyledCardTitle
} from "../../components/card/card.css";

export const StyledGHCard = styled(Card)`
  max-width: 240px;
  height: 320px;
  display: flex;
  flex-flow: column;
`;

export const StyledGHBodyItem = styled(StyledCardBody)`
  flex: 1;

  #pill-wrapper-gh {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const StyledGHPill = styled(Pill)``;
