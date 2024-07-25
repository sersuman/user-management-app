<template>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Add New User</h1>
      <form @submit.prevent="handleAddUser" class="space-y-4">
        <div>
          <label class="block text-gray-700">Name:</label>
          <input v-model="user.name" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
        </div>
        <div>
          <label class="block text-gray-700">Email:</label>
          <input v-model="user.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
        </div>
        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { addUser } from '../services/userService';
  
  export default {
    name: 'AddUser',
    setup() {
      const user = ref({ name: '', email: '' });
  
      const handleAddUser = async () => {
        await addUser(user.value);
        user.value = { name: '', email: '' };
      };
  
      return {
        user,
        handleAddUser,
      };
    },
  };
  </script>
  