<template>
    <div>
      <h1>Dashboard</h1>
      <p>Total Users: {{ totalUsers }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getUsers } from '../services/userService';
  
  export default {
    name: 'UserDashboard',
    setup() {
      const totalUsers = ref(0);
  
      const fetchUsers = async () => {
        try {
          const users = await getUsers();
          totalUsers.value = users.length;
        } catch (error) {
          console.error('Failed to fetch users', error);
        }
      };
  
      onMounted(fetchUsers);
  
      return {
        totalUsers
      };
    }
  };
  </script>
  