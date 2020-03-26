import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 80px;
  background-color: ${p => p.theme.colors.yellow1};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledFooterItem = styled.div`
  cursor: pointer;
`;

export default StyledFooter;
