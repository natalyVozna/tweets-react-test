import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device, transition } from '../../utils/mixins';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
  position: relative;
  padding: 30px 20px;
  ${device.tablet} {
    padding: 50px 40px;
  }
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
  ${device.tablet} {
    justify-content: space-between;
    max-width: 786px;
    margin: 0 auto;
  }
  ${device.desktop} {
    justify-content: flex-start;
    max-width: 1192px;
  }
`;

export const GoBack = styled(NavLink)`
  color: #373737;
  background-color: transparent;
  border: none;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${colors.purple};
  }
`;

export const StyledButton = styled.button`
  padding: 14px;
  background: ${colors.pink};
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
  margin: 40px auto 0;
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
    opacity: 0.9;
    transform: scale(1.02);
  }
`;
