import axios from 'axios';

const USER_API_URL = '/users.json';

let usersCache = [];

const loadUsers = async () => {
  if (!usersCache.length) {
    const response = await axios.get(USER_API_URL);
    usersCache = response.data;
  }
  return usersCache;
};

export const getUsers = async () => {
  return await loadUsers();
};

export const getUserById = async (id) => {
  const users = await getUsers();
  return users.find(user => user.id === parseInt(id));
};

export const createUser = async (user) => {
  const users = await getUsers();
  user.id = users.length + 1;
  users.push(user);
  // Update cache
  usersCache = users;
  return user;
};

export const updateUser = async (user) => {
  const users = await getUsers();
  const index = users.findIndex(u => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
    // Update cache
    usersCache = users;
  }
  return user;
};

export const deleteUser = async (id) => {
  const users = await getUsers();
  // Update cache
  usersCache = users.filter(user => user.id !== id);
  return usersCache;
};
