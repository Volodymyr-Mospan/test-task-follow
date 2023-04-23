import { UserCard } from 'component/UserCard/UserCard';

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <UserCard
            key={user.id}
            tweets={user.tweets}
            followers={user.followers}
            avatar={user.avatar}
          />
        );
      })}
    </ul>
  );
};
