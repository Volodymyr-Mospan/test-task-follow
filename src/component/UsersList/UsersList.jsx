import { UserCard } from 'component/UserCard/UserCard';
import { UsersListItem, UsersListStyled } from './UsersList.styled';

export const UsersList = ({ users, onClick, followingsUsers }) => {
  return (
    <UsersListStyled>
      {users.map(user => {
        const isFollowing = followingsUsers.includes(user.id);
        return (
          <UsersListItem key={user.id}>
            <UserCard
              userId={user.id}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
              onClick={onClick}
              isFollowing={isFollowing}
            />
          </UsersListItem>
        );
      })}
    </UsersListStyled>
  );
};
