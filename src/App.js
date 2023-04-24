import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';

import { fetchUsers, followUser } from 'services/api';
import { UsersList } from 'component/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  // const [visibleUsers, setVisibleUsers] = useState([]);
  const [followingsUsers, setFollowingsUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('followings')) ?? [];
  });

  localStorage.setItem('followings', JSON.stringify(followingsUsers));

  const tungleFollowing = userId => {
    const indexId = followingsUsers.indexOf(userId);

    if (~indexId) {
      return setFollowingsUsers(prev => prev.filter(id => id !== userId));
    }
    setFollowingsUsers(prev => [...prev, userId]);
  };

  const handleOnFollow = (userId, followers) => {
    const putFollow = async () => {
      try {
        const result = await followUser(userId, followers);
        setUsers(prevUsers =>
          prevUsers.map(user => {
            if (user.id !== result.id) return user;
            return result;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    putFollow(userId, followers);
    tungleFollowing(userId);
  };

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

  const filterUsers = () => {
    let filteredUsers = users;
    if (filter === 'followings') {
      filteredUsers = users.filter(user => followingsUsers.includes(user.id));
    }
    if (filter === 'follow') {
      filteredUsers = users.filter(user => !followingsUsers.includes(user.id));
    }
    return filteredUsers;
  };

  const filteredUsers = filterUsers();
  const paginationUsers = filteredUsers.filter((user, i) => i < page * 3);

  console.log(filteredUsers);

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <button type="button">Back</button>{' '}
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">Show all</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </select>
      </header>
      <main>
        {users && (
          <UsersList
            users={paginationUsers}
            onClick={handleOnFollow}
            followingsUsers={followingsUsers}
          />
        )}
        {page < filteredUsers.length / 3 && (
          <button type="button" onClick={() => setPage(prev => (prev += 1))}>
            Load More
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
