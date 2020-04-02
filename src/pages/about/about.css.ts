import styled from "styled-components";
import Button from "../../components/button";

export const StyledAbout = styled.section`
  height: 100vh;
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.blue1},
    ${p => p.theme.colors.purple2}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  p {
    font-weight: 300;
    font-size: 24px;
  }

  @media (max-width: ${p => p.theme.size.tablet}) {
    padding: 20px;
  }
`;

export const AboutContents = styled.div`
  font-size: 24px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${p => p.theme.size.tablet}) {
    font-size: 18px;
  }
`;

export const PortfolioButton = styled(Button)`
  font-size: 1em;
  margin-top: 1.25em;
  padding: 16px 32px;
  color: #f2f0d5;
  border: 2px solid #f2f0d5;
  background: #1c4d8c;
`;

export default StyledAbout;
