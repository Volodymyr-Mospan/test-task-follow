import { Header } from 'component/Header/Header';
import { UsersList } from 'component/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { fetchUsers, followUser } from 'services/api';
import { filterUsers } from 'utilities/filterUsers';
import { TweetsPageStyled } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [followingsUsers, setFollowingsUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('followings')) ?? [];
  });
  const [isLoading, setIsLoading] = useState(false);

  localStorage.setItem('followings', JSON.stringify(followingsUsers));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetchUsers();
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const tungleFollowing = userId => {
    const indexId = followingsUsers.indexOf(userId);
    if (~indexId) {
      return setFollowingsUsers(prev => prev.filter(id => id !== userId));
    }
    setFollowingsUsers(prev => [...prev, userId]);
  };

  const handleButtonFollow = (userId, followers) => {
    setIsLoading(true);
    const putFollow = async () => {
      try {
        const result = await followUser(userId, followers);
        setUsers(prevUsers =>
          prevUsers.map(user => {
            if (user.id !== result.id) return user;
            return result;
          })
        );
        tungleFollowing(userId);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    putFollow(userId, followers);
  };

  const handleOnChange = e => {
    setFilter(e.target.value);
    setPage(1);
  };

  const filteredUsers = filterUsers(filter, users, followingsUsers);
  const usersOnPage = filteredUsers.filter((_, i) => i < page * 3);

  return (
    <TweetsPageStyled>
      <Header filter={filter} onChange={handleOnChange} />

      <main>
        {users && (
          <UsersList
            users={usersOnPage}
            onClick={handleButtonFollow}
            followingsUsers={followingsUsers}
            isLoading={isLoading}
          />
        )}
        {page < filteredUsers.length / 3 && (
          <button type="button" onClick={() => setPage(prev => prev + 1)}>
            Load More
          </button>
        )}
      </main>
    </TweetsPageStyled>
  );
};

export default TweetsPage;
