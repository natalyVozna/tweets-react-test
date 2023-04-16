import React, { useEffect, useState } from "react";
import {
  Container,
  InfoBox,
  Logo,
  StyledButton,
  Text,
} from "./TweetCard.styled";
import logo from "../../assets/svg/Logo.svg";
import AvatarBox from "../AvatarBox/AvatarBox";
import { patchFollow } from "../../services/api";

const TweetCard = ({ user }) => {
  const { avatar, followers, id, isFollowing, tweets } = user;
  const [isFollow, setIsFollow] = useState(null);
  const [countFollowers, setCountFollowers] = useState(0);

  useEffect(() => {
    setIsFollow(isFollowing);
    setCountFollowers(followers);
    // eslint-disable-next-line
  }, []);

  const updateData = (data) => {
    setIsFollow(data.isFollowing);
    setCountFollowers(data.followers);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!isFollow) {
      const data = await patchFollow(id, {
        ...user,
        isFollowing: true,
        followers: +countFollowers + 1,
      });
      updateData(data);
    } else {
      const data = await patchFollow(id, {
        ...user,
        isFollowing: false,
        followers: +countFollowers - 1,
      });
      updateData(data);
    }
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="avatar" width={76} />
      </Logo>
      <AvatarBox url={avatar} />
      <InfoBox>
        <Text> {tweets} tweets</Text>
        <Text> {countFollowers?.toLocaleString("en-US")} Followers</Text>
        <StyledButton type="button" onClick={handleClick} follow={isFollow}>
          {isFollow ? "Following" : "Follow"}
        </StyledButton>
      </InfoBox>
    </Container>
  );
};

export default TweetCard;
