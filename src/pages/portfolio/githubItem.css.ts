import styled from "styled-components";
import Card from "../../components/card";
import Pill from "../../components/pill";
import { StyledCardBody } from "../../components/card/card.css";

export const StyledGHCard = styled(Card)`
  max-width: 240px;
  display: flex;
  flex-flow: column;

  @media (max-width: ${p => p.theme.size.tablet}) {
    min-width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export const StyledGHBodyItem = styled(StyledCardBody)`
  flex: 1;

  #pill-wrapper-gh {
    display: flex;
    flex-flow: row wrap;
  }
`;

export const StyledGHPill = styled(Pill)``;

export default StyledGHBodyItem;
