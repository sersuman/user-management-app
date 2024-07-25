<template>
  <div class="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-indigo-500 text-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold">Total Users</h2>
        <router-link to="/users" class="flex items-center">
          <p class="text-3xl mt-2">{{ totalUsers }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getUsers } from '../services/userService';

export default {
  name: 'DashboardPage',
  setup() {
    const totalUsers = ref(0);

    const loadUsers = async () => {
      const users = await getUsers();
      totalUsers.value = users.length;
    };

    onMounted(loadUsers);

    return {
      totalUsers,
    };
  },
};
</script>
