import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomePageStyled = styled.div`
  height: 100vh;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  color: #ebd8ff;

  & > h1 {
    margin-bottom: 16px;
    font-size: 38px;
    text-transform: uppercase;
  }
  & > h2 {
    margin-bottom: 8px;
    font-size: 20px;
    text-transform: uppercase;
  }
  & > p {
    margin-bottom: 32px;
    padding-left: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 196px;
  min-height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: #373737;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  background: #ebd8ff;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    background: #d4c2e6;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;
