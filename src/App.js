import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';

import { fetchUsers, followUser } from 'services/api';
import { UsersList } from 'component/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = useState(2);

  const handleOnFollow = (userId, followers) => {
    const putFollow = async () => {
      try {
        const result = await followUser(userId, followers);
        setUsers(prevUsers => [
          result,
          ...prevUsers.filter(user => user.id !== result.id),
        ]);
      } catch (error) {
        console.log(error);
      }
    };
    putFollow(userId, followers);
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

  useEffect(() => {
    const visibleUsers = users.filter((user, i) => i < page * 3);
    setVisibleUsers(visibleUsers);
  }, [page, users]);

  return (
    <div>
      <header></header>
      <main>
        {users && <UsersList users={visibleUsers} onClick={handleOnFollow} />}
      </main>
    </div>
  );
}

export default App;
