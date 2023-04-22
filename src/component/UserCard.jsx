import React from 'react';
import { FoneImage, Ramka, UserCardStyled } from './UserCard.styled';
import foneImage from 'img/picture2_1@2x.png';

export const UserCard = () => {
  return (
    <UserCardStyled>
      <FoneImage src={foneImage} alt="fone" />
      <Ramka></Ramka>
    </UserCardStyled>
  );
};
