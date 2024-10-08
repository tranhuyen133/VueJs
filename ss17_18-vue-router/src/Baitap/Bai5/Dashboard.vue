<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the admin dashboard!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

// Sử dụng router để chuyển hướng sau khi đăng xuất
const router = useRouter();

const logout = () => {
  // Xóa trạng thái đăng nhập
  localStorage.removeItem('isLoggedIn');
  router.push({ path: '/login' }); // Chuyển hướng về trang đăng nhập sau khi đăng xuất
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
