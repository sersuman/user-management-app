import axios from 'axios';
import { useToast } from 'vue-toastification';

const USER_API_URL = 'http://localhost:3000/users';
const toast = useToast();

export const getUsers = async () => {
  try {
    const response = await axios.get(USER_API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch users', error);
    toast.error('Failed to fetch users');
    return [];
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${USER_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch user with id ${id}`, error);
    toast.error('Failed to fetch user');
    return null;
  }
};

export const updateUser = async (updatedUser) => {
  try {
    await axios.put(`${USER_API_URL}/${updatedUser.id}`, updatedUser);
    toast.success('User updated successfully');
  } catch (error) {
    console.error('Failed to update user', error);
    toast.error('Failed to update user');
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${USER_API_URL}/${id}`);
    toast.success('User deleted successfully');
  } catch (error) {
    console.error('Failed to delete user', error);
    toast.error('Failed to delete user');
  }
};

export const addUser = async (newUser) => {
  try {
    const response = await axios.post(USER_API_URL, newUser);
    toast.success('User added successfully');
    return response.data;
  } catch (error) {
    console.error('Failed to add user', error);
    toast.error('Failed to add user');
  }
};
