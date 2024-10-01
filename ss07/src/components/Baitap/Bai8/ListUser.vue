<template>
    <div>
      <h2>-------- List User --------</h2>
      <button @click="toggleForm">Add user</button>
      <FormAddUser v-if="showForm" @close-form="toggleForm" />
    </div>
  </template>
  
  <script setup>

  import FormAddUser from '@/components/Baitap/Bai8/FormAddUser.vue'

  </script>
  
  <style scoped>
  button {
    background-color: #4285f4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  h2 {
    text-align: center;
  }
  </style>
  