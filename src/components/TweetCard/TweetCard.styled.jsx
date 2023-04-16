import styled from "styled-components";
import cover from "../../assets/svg/cover-tweet.svg";
import { colors } from "../../utils/colors";
import { device, transition } from "../../utils/mixins";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 280px;
  max-width: 380px;
  width: 100%;
  justify-content: space-between;
  height: auto;
  min-height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  ::after {
    content: "";
    position: absolute;
    width: calc(100% - 72px);
    height: 168px;
    left: 36px;
    top: 28px;
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size: contain;
  }

  ${device.tablet} {
    width: calc((100% - 26px) / 2);
  }
  ${device.desktop} {
    width: calc((100% - 52px) / 3);
  }
`;

export const Logo = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-top: 20px;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 36px;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  padding: 14px;
  background: ${(p) => (p.follow === true ? colors.green : colors.pink)};
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
  margin-top: 10px;
  border: 0;
  text-transform: uppercase;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: opacity ${transition}, transform ${transition};

  :hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
