import styled from "styled-components";

import DogImg from "../../assets/img/dog.png";
import DogImgRetina from "../../assets/img/dog.webp";
import { device } from "../../utils/mixins";
import { colors } from "../../utils/colors";

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${device.tablet} {
    max-width: 600px;
  }
`;

export const NotFoundTitle = styled.h2`
  font-size: 60px;
  font-weight: 400;
  ${device.tablet} {
    font-size: 120px;
  }
`;
export const NotFoundLogo = styled.h3`
  margin-bottom: 20px;
  color: white;
  font-size: 30px;
`;

export const Logo404 = styled.img`
  width: 800px;
`;

export const NotFoundDesc = styled.p`
  font-size: 20px;
  ${device.tablet} {
    font-size: 35px;
  }
`;
export const NotFoundText = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
  ${device.tablet} {
    font-size: 20px;
  }

  a {
    color: ${colors.purple};
    &:hover {
      text-decoration: none;
    }
  }
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 160px;
  background-repeat: no-repeat;
  background-image: url(${DogImg});
  background-position: center bottom;
  background-size: contain;

  ${device.retina} {
    background-image: url(${DogImgRetina});
  }
  ${device.tablet} {
    width: 400px;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
