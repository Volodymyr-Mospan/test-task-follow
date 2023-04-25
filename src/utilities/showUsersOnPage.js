export const showUsersOnPage = (users, page) => {
  let usersOnPage = [];
  if (!users.length) return usersOnPage;
  for (let i = 0; i < page * 3; i += 1) {
    usersOnPage.push(users[i]);
  }

  return usersOnPage;
};
