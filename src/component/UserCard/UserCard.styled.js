import styled from 'styled-components';

export const UserCardStyled = styled.div`
  position: relative;

  padding: 28px 36px 36px 36px;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
`;

export const FoneImage = styled.img`
  margin-bottom: 88px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;

  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const BorderImage = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const UserImage = styled.img`
  position: absolute;
  top: 186px;
  left: 158px;
  width: 64px;

  border-radius: 50%;
`;

export const TweetsText = styled.p`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowersText = styled.p`
  margin-bottom: 26px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const ButtonFollow = styled.button`
  background: #ebd8ff;

  &:hover,
  &:active {
    background: #d4c2e6;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background: #91859e9a;
  }
`;

export const ButtonFollowing = styled.button`
  background: #5cd3a8;

  &:hover,
  &:active {
    background: #53be97;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background: #53be9788;
  }
`;
