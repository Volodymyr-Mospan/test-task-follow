export const filterUsers = (filter, users, followingsUsers) => {
  let filteredUsers = users;
  if (filter === 'followings') {
    filteredUsers = users.filter(user => followingsUsers.includes(user.id));
  }
  if (filter === 'follow') {
    filteredUsers = users.filter(user => !followingsUsers.includes(user.id));
  }
  return filteredUsers;
};
