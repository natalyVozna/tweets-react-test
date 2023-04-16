import styled from "styled-components";
import { colors } from "../../utils/colors";
import { transition } from "../../utils/mixins";

export const ContainerSelect = styled.div`
  /* position: absolute;
  top: 24px;
  right: 24px; */
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 143px;
  height: 40px;
  background: rgba(237, 242, 255, 0.7);
  border-radius: 8px;
  padding: 0px 16px;
  color: ${colors.purple};
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
`;
export const DropdownBox = styled.button`
  border: none;
  padding: 0;
  width: 16px;
  min-width: 16px;
  height: 16px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.purple};
  cursor: pointer;
  transform: rotate(${(p) => (p.rotate === "rotate" ? "180deg" : "0deg")});
  transition: transform ${transition};

  svg {
    width: 14px;
    height: 10px;
    fill: currentColor;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  top: 40px;
  right: 0;
  display: flex;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.08), 0px 0px 80px rgba(0, 0, 0, 0.32);
  border-radius: 8px;
  width: 143px;
  padding: 8px 0;
`;
export const OptionItem = styled.button`
  border: none;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 17px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #303842;
  transition: background-color ${transition};

  :hover {
    background-color: rgba(235, 216, 255, 0.4);
  }
`;
