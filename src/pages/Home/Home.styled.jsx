import styled from "styled-components";
import { device, transition } from "../../utils/mixins";
import { colors } from "../../utils/colors";
import { NavLink } from "react-router-dom";
import heroBg from "../../assets/img/hero.png";
import heroBg2x from "../../assets/img/hero-2x.png";
import heroBgRet from "../../assets/img/hero.webp";
import heroBg2xRet from "../../assets/img/hero-2x.webp";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;

  padding: 0;
  min-height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  line-height: 1.6;
  font-weight: 600;
  text-align: center;
  color: ${colors.white};
  min-height: calc(100vh - 80px);
  padding: 60px 20px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  background-image: url(${heroBg}),
    linear-gradient(180deg, #8892ff 0%, #6d6be5 18.75%);
  background-image: url(${heroBgRet}),
    linear-gradient(180deg, #8892ff 0%, #6d6be5 18.75%);

  background-repeat: no-repeat;
  background-size: 100vw 72vw, 100% 100%;
  background-position: bottom 0 center, top 0 right 0;

  ${device.retina} {
    background-image: url(${heroBg2x}),
      linear-gradient(180deg, #8892ff 0%, #6d6be5 18.75%);
    background-image: url(${heroBg2xRet}),
      linear-gradient(180deg, #8892ff 0%, #6d6be5 18.75%);
  }
  ${device.tablet} {
    padding: 40px 40px;
    font-size: 28px;
    max-width: 100%;
    margin: 0 auto;
    background-size: 78vw 44vw, 100% 100%;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  align-items: center;
  gap: 50px;
  padding: 30px 20px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 2px;
  font-size: 24px;
  line-height: 1;
  text-decoration: none;
  transition: background-color 250ms ${transition}, color ${transition};

  &.active {
    color: ${colors.white};
    background-color: ${colors.purple};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${colors.green};
  }
`;
