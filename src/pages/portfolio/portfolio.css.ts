import styled from "styled-components";

export const StyledPortfolio = styled.section`
  padding: 80px;
  background-color: ${p => p.theme.colors.purple2};
  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.purple2},
    ${p => p.theme.colors.yellow1}
  );
  @media (max-width: ${p => p.theme.size.tablet}) {
    padding: 16px;
  }

  #item-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    @media (max-width: ${p => p.theme.size.tablet}) {
      height: inherit;
      overflow: auto;
      padding: 4px;
    }
  }
`;

export default StyledPortfolio;
