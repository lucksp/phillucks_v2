import styled from "styled-components";
import bgImg from "../../assets/home_bg.jpg";
import { number } from "prop-types";

interface IScrollProps {
  scrollY: number;
}

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

export const StyledFirstName = styled.div<IScrollProps>`
  text-transform: uppercase;
  color: red;
  font-size: 48px;
  margin-left: -80px;
  margin-right: 0;
  transform: translateX(-${props => props.scrollY}px);
`;
export const StyledLastName = styled.div<IScrollProps>`
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px red;
  font-size: 48px;
  margin-right: -80px;
  margin-left: 0;
  transform: translateX(${props => props.scrollY}px);
`;
