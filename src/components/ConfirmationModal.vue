<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <p class="text-lg font-semibold text-gray-900 mb-4">{{ title }}</p>
      <p class="text-gray-700 mb-6">{{ message }}</p>
      <div class="flex justify-end">
        <button @click="cancel" class="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">Cancel</button>
        <button @click="confirm" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ConfirmationModal',
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const confirm = () => {
      emit('onConfirm');
    };

    const cancel = () => {
      emit('onCancel');
    };

    return {
      confirm,
      cancel
    };
  }
});
</script>

