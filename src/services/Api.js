import axios from 'axios';

axios.defaults.baseURL = 'https://641597a89a2dc94afe65849c.mockapi.io/';

export const fetchUsers = async () => {
  const respons = await axios.get(`users`);

  if (!respons.data.length) {
    throw new Error('Nothing found');
  }

  return respons.data;
};
