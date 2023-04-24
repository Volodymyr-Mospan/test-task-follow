import React from 'react';
import {
  BorderImage,
  FoneImage,
  Line,
  UserCardStyled,
  UserImage,
  TweetsText,
  FollowersText,
  ButtonFollow,
  ButtonFollowing,
} from './UserCard.styled';
import { fetchUsers, followUser } from 'services/api';
import foneImage from 'img/picture2_1@2x.png';
import borderImage from 'img/ramka.png';
import { numberWithCommas } from 'services/numberWithComma';

export const UserCard = ({ userId, tweets, followers, avatar, onClick }) => {
  // const handleFollow = () => {};

  return (
    <UserCardStyled>
      <FoneImage src={foneImage} alt="Fone" />
      <Line></Line>
      <UserImage src={avatar} alt="User's avatar" />
      <BorderImage src={borderImage} alt="Border" />
      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>{numberWithCommas(followers)} Followers</FollowersText>
      <ButtonFollow onClick={() => onClick(userId, followers + 1)}>
        Follow
      </ButtonFollow>
      <ButtonFollowing onClick={() => fetchUsers()}>Following</ButtonFollowing>
    </UserCardStyled>
  );
};
