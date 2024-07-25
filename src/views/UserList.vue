<template>
  <div class="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">User List</h1>
    <ul class="space-y-4">
      <li v-for="user in users" :key="user.id" class="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200">
        <router-link :to="{ name: 'UserDetail', params: { id: user.id } }" class="block text-lg font-semibold text-indigo-600 hover:underline">
          {{ user.name }}
        </router-link>
        <p class="text-gray-600">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUsers } from '../services/userService';

    const users = ref([]);

    const loadUsers = async () => {
      users.value = await getUsers();
    };

    onMounted(loadUsers);
  
</script>
