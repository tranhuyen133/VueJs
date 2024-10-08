<template>
  <div>
    <h1>Admin Page</h1>
    
    <!-- Menu điều hướng -->
    <nav>
      <router-link to="/admin">Dashboard</router-link> |
      <router-link to="/admin/manager-user">User</router-link> |
      <router-link to="/admin/manager-product">Product</router-link> |
      <router-link to="/admin/settings">Setting</router-link>
    </nav>

    <!-- Hiển thị nội dung các trang con -->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: green;
}

nav a.router-link-active {
  color: red;
  font-weight: bold;
}
</style>
