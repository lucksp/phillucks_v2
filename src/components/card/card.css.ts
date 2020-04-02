import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 24px;
  box-shadow: 0 2px 2px 2px rgba(${p => p.theme.colors.almost_black_rgb}, 0.35);
  background-color: ${p => p.theme.colors.ultra_light_gray};
  border-radius: 4px;
  margin: 8px;
`;

export const StyledCardTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 0 auto;
  font-family: ${p => p.theme.fonts.base};
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  margin-bottom: 4px;
  text-transform: uppercase;
`;

export const StyledCardBody = styled.div`
  padding: 4px 0px;
`;

export const StyledCardFooter = styled.div`
  border-top: 1px solid ${p => p.theme.colors.light_gray};
  padding: 4px 8px;
  a {
    text-decoration: none;
    color: ${p => p.theme.colors.purple1};
  }
`;

export default StyledCard;
