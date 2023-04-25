import { UserCard } from 'component/UserCard/UserCard';
import { UsersListItem, UsersListStyled } from './UsersList.styled';
import { useEffect, useRef } from 'react';

export const UsersList = ({ users, onClick, followingsUsers, isLoading }) => {
  const lastUserRef = useRef(null);
  let ref = lastUserRef.current;

  useEffect(() => {
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  }, [ref]);

  return (
    <UsersListStyled>
      {users.map((user, index) => {
        const isFollowing = followingsUsers.includes(user.id);
        return (
          <UsersListItem
            key={user.id}
            ref={index === users.length - 1 ? lastUserRef : null}
          >
            <UserCard
              userId={user.id}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
              onClick={onClick}
              isFollowing={isFollowing}
              isLoading={isLoading}
            />
          </UsersListItem>
        );
      })}
    </UsersListStyled>
  );
};
