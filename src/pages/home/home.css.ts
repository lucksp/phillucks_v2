import styled from "styled-components";
import bgImg from "../../assets/home_bg.jpg";

export const StyledHome = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");
  font-family: "Righteous", cursive;
  font-size: 8em;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;

  @media (max-width: 768px) {
    font-size: 4em;
  }

  &:before {
    width: 100%;
    height: 100%;
    content: " ";
    background-color: #9b91f2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.3;
  }
  #text-wrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

interface IScrollProps {
  scrollY: number;
}

export const StyledFirstName = styled.div.attrs<IScrollProps>(
  ({ scrollY }) => ({
    style: {
      transform: `translateX(-${scrollY}px)`
    }
  })
)<IScrollProps>`
  text-transform: uppercase;
  color: #f2f0d5;
  margin-left: -80px;
  margin-right: 0;
`;

export const StyledLastName = styled.div.attrs<IScrollProps>(({ scrollY }) => ({
  style: {
    transform: `translateX(${scrollY}px)`
  }
}))<IScrollProps>`
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #f2f0d5;
  margin-right: -80px;
  margin-left: 0;
`;
