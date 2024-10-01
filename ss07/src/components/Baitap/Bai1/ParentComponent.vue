<template>
    <div>
      <h1>Parent Component</h1>
      <p>Parent Company: {{ companyName }}</p>
      <p>---------------------------------------------</p>
      <!-- Truyền dữ liệu từ component cha xuống con -->
      <children-component :company="companyName"></children-component>
    </div>
  </template>
  
  <script setup>
  import ChildrenComponent from '@/components/Baitap/Bai1/ChildrenComponent.vue'
  
  // Tạo biến đại diện cho tên công ty
  const companyName = 'Rikkei Academy'
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  