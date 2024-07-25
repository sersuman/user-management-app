<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <img class="h-8 w-8" src="./assets/logo.png" alt="Vue logo">
              <h1 class="ml-3 text-xl font-semibold text-gray-900 hover:text-gray-700">User Management</h1>
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/users" class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300">User</router-link>
            <div class="relative">
              <button class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">User List</button>
              <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <router-link v-for="user in topUsers.slice(0, 3)" :key="user.id" :to="`/users/${user.id}`" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">{{ user.name }}</router-link>
              </div>
            </div>
            <router-link to="/add" class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300">Add User</router-link>
          </div>
        </div>
      </div>
    </nav>
    <main class="flex-grow p-4">
      <router-view />
    </main>
    <footer class="bg-white shadow-md p-4 text-center">
      <p class="text-gray-600">&copy; 2023 User Management</p>
    </footer>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import { getUsers } from './services/userService';

export default {
  name: 'App',
  setup() {
    const showDropdown = ref(false);
    const topUsers = ref([]);

    const fetchTopUsers = async () => {
      try {
        const users = await getUsers();
        topUsers.value = users.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 3);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };

    onMounted(fetchTopUsers);

    return {
      showDropdown,
      topUsers,
    };
  },
};
</script>
