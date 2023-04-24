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
  Logo,
} from './UserCard.styled';
import foneImage from 'img/picture2_1@2x.png';
import logoImage from 'img/Logo.svg';
import borderImage from 'img/ramka.png';
import { numberWithCommas } from 'services/numberWithComma';

export const UserCard = ({
  userId,
  tweets,
  followers,
  avatar,
  onClick,
  isFollowing,
}) => {
  return (
    <UserCardStyled>
      <Logo src={logoImage} alt="Fone" />
      <FoneImage src={foneImage} alt="Fone" />
      <Line></Line>
      <UserImage src={avatar} alt="User's avatar" />
      <BorderImage src={borderImage} alt="Border" />
      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>{numberWithCommas(followers)} Followers</FollowersText>
      {isFollowing ? (
        <ButtonFollowing onClick={() => onClick(userId, followers - 1)}>
          Following
        </ButtonFollowing>
      ) : (
        <ButtonFollow onClick={() => onClick(userId, followers + 1)}>
          Follow
        </ButtonFollow>
      )}
    </UserCardStyled>
  );
};
