<template>
    <div>
      <h3>Trước nhập dữ liệu:</h3>
      <div>Email</div>
      <input v-model="form.email" type="text" placeholder="Nhập địa chỉ email">
      <div>Giá trị: {{ form.email }}</div>
  
      <h3>Sau khi nhập dữ liệu:</h3>
      <div>Email</div>
      <input v-model="form.email" type="text" placeholder="Nhập địa chỉ email">
      <div>Giá trị: {{ form.email }}</div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  
  // Sử dụng reactive để tạo đối tượng form
  const form = reactive({
    email: ""
  });
  </script>
  
  <style >
 
  </style>
  