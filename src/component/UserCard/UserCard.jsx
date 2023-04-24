import React, { useEffect, useState } from 'react';
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
import { numberWithCommas } from 'utilities/numberWithComma';

export const UserCard = ({
  userId,
  tweets,
  followers,
  avatar,
  onClick,
  isFollowing,
  isLoading,
}) => {
  const [isLoadingHere, setIsLoadingHere] = useState(false);

  useEffect(() => {
    if (!isLoading) setIsLoadingHere(false);
  }, [isLoading]);

  const handleClick = val => {
    setIsLoadingHere(true);
    onClick(userId, followers + val);
  };
  return (
    <UserCardStyled>
      <Logo src={logoImage} alt="Fone" />
      <FoneImage src={foneImage} alt="Fone" width="308" height="168" />
      <Line></Line>
      <UserImage src={avatar} alt="User's avatar" />
      <BorderImage src={borderImage} alt="Border" />
      <TweetsText>{tweets} tweets</TweetsText>
      <FollowersText>{numberWithCommas(followers)} Followers</FollowersText>
      {isFollowing ? (
        <ButtonFollowing
          disabled={!!isLoadingHere}
          onClick={() => handleClick(-1)}
        >
          {!isLoadingHere ? 'Following' : 'Loading...'}
        </ButtonFollowing>
      ) : (
        <ButtonFollow disabled={!!isLoadingHere} onClick={() => handleClick(1)}>
          {!isLoadingHere ? 'Follow' : 'Loading...'}
        </ButtonFollow>
      )}
    </UserCardStyled>
  );
};
