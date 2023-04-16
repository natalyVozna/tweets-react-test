import React from "react";
import { Circle, Container, Line } from "./AvatarBox.styled";

const AvatarBox = ({ url }) => {
  return (
    <Container>
      <Line />
      <Line />
      <Circle>
        <img src={url} alt="avatar" width={76} />
      </Circle>
    </Container>
  );
};

export default AvatarBox;
