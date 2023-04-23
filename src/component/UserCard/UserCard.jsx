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
} from './UserCard.styled';
import { fetchUsers } from 'services/api';
import foneImage from 'img/picture2_1@2x.png';
import borderImage from 'img/ramka.png';
// import userImage from 'img/userAvatar.png';

export const UserCard = ({ tweets, followers, avatar }) => {
  return (
    <UserCardStyled>
      <FoneImage src={foneImage} alt="fone" />
      <Line></Line>
      <UserImage src={avatar} alt="user Avatar" />
      <BorderImage src={borderImage} alt="border" />
      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>{followers} Followers</FollowersText>
      <ButtonFollow onClick={() => fetchUsers()}>Follow</ButtonFollow>
    </UserCardStyled>
  );
};
