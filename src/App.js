import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';

import { UserCard } from 'component/UserCard';
import { fetchUsers } from 'services/Api';

function App() {
  const [users, setUsers] = useState([]);

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
    <div className="App">
      <header></header>
      <main>
        <UserCard />
      </main>
    </div>
  );
}

export default App;
