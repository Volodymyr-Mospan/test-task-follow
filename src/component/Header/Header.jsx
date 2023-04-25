import { HeaderStyled, LinkStyled } from './Header.styled';
import { Filter } from 'component/Filter/Filter';

export const Header = ({ filter, onChange }) => {
  return (
    <HeaderStyled>
      <LinkStyled to="/">Back</LinkStyled>
      <Filter filter={filter} onChange={onChange} />
    </HeaderStyled>
  );
};
