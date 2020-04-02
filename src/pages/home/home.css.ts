import styled from "styled-components";
import bgImg from "../../assets/home_bg.jpg";
import Button from "../../components/button";

export const StyledHome = styled.section`
  font-family: ${p => p.theme.fonts.righteous};
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
  z-index: 50;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 4em;
  }

  #text-wrapper {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: 50;
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  content: " ";
  background-color: ${props => props.theme.colors.purple1};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  z-index: 0;
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

export const StyledLastName = styled.section.attrs<IScrollProps>(
  ({ scrollY }) => ({
    style: {
      transform: `translateX(${scrollY}px)`
    }
  })
)<IScrollProps>`
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #f2f0d5;
  margin-right: -80px;
  margin-left: 0;
`;

export const HomeButton = styled(Button)`
  z-index: 50;
  margin-bottom: 24px;
  font-size: 0.25em;
  padding: 16px 32px;
  color: #f2f0d5;
  border: 2px solid #f2f0d5;
  background: #1c4d8c;
`;

export default StyledHome;
