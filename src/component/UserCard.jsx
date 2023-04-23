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
import { fetchUsers } from 'services/Api';
import foneImage from 'img/picture2_1@2x.png';
import borderImage from 'img/ramka.png';
import userImage from 'img/userAvatar.png';

export const UserCard = () => {
  return (
    <UserCardStyled>
      <FoneImage src={foneImage} alt="fone" />
      <Line></Line>
      <BorderImage src={borderImage} alt="border" />
      <UserImage src={userImage} alt="user Avatar" />
      <TweetsText>777 tweets</TweetsText>
      <FollowersText>100,500 Followers</FollowersText>
      <ButtonFollow onClick={() => fetchUsers()}>Follow</ButtonFollow>
    </UserCardStyled>
  );
};
