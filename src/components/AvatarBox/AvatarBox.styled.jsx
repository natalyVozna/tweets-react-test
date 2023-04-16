import styled from "styled-components";
import line from "../../assets/svg/line-tweet.svg";
import circle from "../../assets/svg/circle-tweet.svg";

export const Container = styled.div`
  position: absolute;
  top: 178px;
  width: 100%;
  max-width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 74px;
`;
export const Line = styled.div`
  width: calc(50% - 37px);
  max-width: 100%;
  height: 8px;
  background-image: url(${line});
`;
export const Circle = styled.div`
  position: absolute;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  left: 50%;
  top: 2px;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    width: 89px;
    height: 89px;
    left: 0;
    top: 0;
    background-image: url(${circle});
    background-repeat: no-repeat;
    background-size: 89px 89px;
  }

  img {
    position: relative;
    left: 2px;
    width: 64px;
    height: 64px;
    display: block;
    border-radius: 50%;
  }
`;
