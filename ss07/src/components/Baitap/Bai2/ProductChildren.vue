<template>
    <div>
      <h1>Dữ liệu trong component con</h1>
      <!-- Hiển thị dữ liệu sản phẩm nhận từ props -->
      <p>Id: {{ product.id }}</p>
      <p>Product name: {{ product.name }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Quantity: {{ product.quantity }}</p>
    </div>
  </template>
  
  <script setup>
  // Nhận props từ component cha
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  