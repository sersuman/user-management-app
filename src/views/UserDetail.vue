<template>
    <div>
        <h1>User Detail</h1>
        <div v-if="user">
            <p>Name: <input v-model="user.name" /></p>
            <p>Email: <input v-model="user.email" /></p>
            <button @click="updateUser">Update</button>
            <button @click="deleteUser">Delete</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getUserById, updateUser, deleteUser } from '../services/userService';
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'UserDetail',
    setup() {
        const user = ref(null);
        const route = useRoute();
        const router = useRouter();
        const userId = route.params.id;

        onMounted(async () => {
            user.value = await getUserById(userId);
        });

        const updateUserDetails = async () => {
            await updateUser(user.value);
            router.push('/');
        };

        const deleteUserDetails = async () => {
            await deleteUser(userId);
            router.push('/');
        };

        return {
            user,
            updateUser: updateUserDetails,
            deleteUser: deleteUserDetails
        };
    }
};
</script>
