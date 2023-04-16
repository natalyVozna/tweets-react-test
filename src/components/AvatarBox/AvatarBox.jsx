import React from "react";
import { Circle, Container, Line } from "./AvatarBox.styled";
import avatar from "../../assets/img/avatar-default.png";
// import avatar from "../../assets/img/avatar-default-2x.webp";

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
