<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal">
        <h2>Form Add User</h2>
        <form>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
  
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
  
          <label for="address">Address</label>
          <input type="text" id="address" v-model="address" />
        </form>
        <button @click="closeForm" class="close-btn">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true
    }
  });
  
  const closeForm = () => {
    emit('closeForm');
  };
  
  const name = ref('');
  const email = ref('');
  const address = ref('');
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
  }
  
  .close-btn {
    margin-top: 20px;
    padding: 8px 16px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  