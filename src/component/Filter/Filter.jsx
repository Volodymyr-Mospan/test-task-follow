import { SelectStyled } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <SelectStyled value={filter} onChange={e => onChange(e)}>
      <option value="all">Show all</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </SelectStyled>
  );
};
