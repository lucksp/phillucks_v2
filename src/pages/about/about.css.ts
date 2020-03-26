import styled from "styled-components";

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
  @media (max-width: ${p => p.theme.size.tablet}) {
    font-size: 18px;
  }
`;

export default StyledAbout;
