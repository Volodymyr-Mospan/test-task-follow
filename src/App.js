import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';

import { fetchUsers } from 'services/api';
import { UserList } from 'component/UserList/UserList';

function App() {
  const [users, setUsers] = useState(null);

  console.log(users);

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

  return (
    <div>
      <header></header>
      <main>{users && <UserList users={users} />}</main>
    </div>
  );
}

export default App;
