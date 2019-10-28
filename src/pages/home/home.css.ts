import styled from "styled-components";
import bgImg from "../../assets/home_bg.jpg";

export const StyledHome = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
  font-family: "Righteous", cursive;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background: url(${bgImg}) no-repeat center;
  #text-wrapper {
    margin: auto 0;
  }
`;

export const StyledFirstName = styled.div`
  text-transform: uppercase;
  color: red;
  font-size: 48px;
  margin-left: -80px;
  margin-right: 0;
`;
export const StyledLastName = styled.div`
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px red;
  font-size: 48px;
  margin-right: -80px;
  margin-left: 0;
`;
