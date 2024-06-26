<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="'/user/' + user.id">{{ user.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getUsers } from '../services/userService';
  
  export default {
    name: 'UserList',
    setup() {
      const users = ref([]);
  
      const fetchUsers = async () => {
        try {
          users.value = await getUsers();
        } catch (error) {
          console.error('Failed to fetch users', error);
        }
      };
  
      onMounted(fetchUsers);
  
      return {
        users
      };
    }
  };
  </script>
  