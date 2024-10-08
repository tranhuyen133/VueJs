<template>
    <div>
      <h1>Login Page</h1>
      <p>Please log in to access the dashboard.</p>
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  // Sử dụng router để chuyển hướng sau khi đăng nhập thành công
  const router = useRouter();
  
  const login = () => {
    // Giả lập đăng nhập thành công bằng cách lưu trạng thái vào localStorage
    localStorage.setItem('isLoggedIn', true);
    router.push({ path: '/dashboard' }); // Chuyển hướng đến Dashboard sau khi đăng nhập
  };
  </script>
  
  <style scoped>
  /* Thêm CSS nếu cần */
  </style>
  