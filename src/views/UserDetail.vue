<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">User Detail</h1>
    <div v-if="user" class="space-y-4">
      <div>
        <label class="block text-gray-700">User Id:{{ user.id }}</label>
      </div>
      <div>
        <label class="block text-gray-700">Name:</label>
        <input v-model="user.name" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
      </div>
      <div>
        <label class="block text-gray-700">Email:</label>
        <input v-model="user.email" class="w-full px-4 py-2 border border-gray-300 rounded-lg" />
      </div>
      <div class="flex space-x-4 mt-4">
        <button @click="handleUpdateUser" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Update</button>
        <button @click="confirmDeleteUser" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
      </div>
    </div>
    <div v-else>
      <p class="text-red-500">User not found</p>
    </div>

    <!-- Confirmation Modal -->
    <ConfirmationModal
      v-if="showConfirmationModal"
      title="Confirm Deletion"
      message="Are you sure you want to delete this user?"
      @onConfirm="handleDeleteUser"
      @onCancel="cancelDelete"
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getUserById, updateUser, deleteUser } from '../services/userService';
import ConfirmationModal from '../components/ConfirmationModal.vue';

export default {
  name: 'UserDetail',
  components: {
    ConfirmationModal,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = ref(null);
    const showConfirmationModal = ref(false);

    const fetchUser = async () => {
      const userId = route.params.id;
      user.value = await getUserById(userId);
    };

    const handleUpdateUser = async () => {
      await updateUser(user.value);
    };

    const confirmDeleteUser = () => {
      showConfirmationModal.value = true;
    };

    const handleDeleteUser = async () => {
      await deleteUser(user.value.id);
      router.push('/');
      hideConfirmationModal(); 
    };

    const hideConfirmationModal = () => {
      showConfirmationModal.value = false;
    };

    onMounted(fetchUser);

    return {
      user,
      showConfirmationModal,
      handleUpdateUser,
      confirmDeleteUser,
      handleDeleteUser,
      hideConfirmationModal,
    };
  },
};
</script>
