import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1920px;
  padding: 32px;
  margin-left: auto;
  margin-right: auto;

  /* border-bottom: 1px solid #373737; */
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
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
`;
