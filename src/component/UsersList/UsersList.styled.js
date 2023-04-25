import styled from 'styled-components';

export const UsersListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  max-width: 1920px;
  padding: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const UsersListItem = styled.li`
  list-style: none;
  flex-basis: 25%;
`;
