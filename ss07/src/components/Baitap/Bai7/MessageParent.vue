<template>
    <div>
      <h1>Message Parent Component</h1>
      <!-- Sử dụng component con MessageChildren -->
      <MessageChildren @sendMessage="displayMessage"></MessageChildren>
    </div>
  </template>
  
  <script setup>
  import MessageChildren from '@/components/Baitap/Bai7/MessageChildren.vue';
  
  // Hàm hiển thị thông báo khi nhận sự kiện từ component con
  const displayMessage = () => {
    alert('Welcome to Rikkei Education');
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  