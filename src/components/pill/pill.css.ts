import styled from "styled-components";

export const StyledPill = styled.div`
  border-radius: 16px;
  font-size: 12px;
  background-color: ${p => p.theme.colors.blue1};
  color: ${p => p.theme.colors.yellow1};
  padding: 4px 8px;
  margin: 2px 4px;
  display: flex;
  align-item: center;
  justify-content: center;
`;
