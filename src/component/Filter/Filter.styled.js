import styled from 'styled-components';

export const SelectStyled = styled.select`
  min-width: 196px;
  min-height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  background: #ebd8ff;

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  text-align: center;

  cursor: pointer;

  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    background: #d4c2e6;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;
