<template>
    <div>
      <h1>Dữ liệu trong component cha</h1>
      <p>---------------------------------------------</p>
      <!-- Truyền dữ liệu từ component cha xuống con -->
      <ProductChildren :product="product"></ProductChildren>
    </div>
  </template>
  
  <script setup>
  import ProductChildren from '@/components/Baitap/Bai2/ProductChildren.vue'
  
  // Tạo đối tượng product chứa thông tin sản phẩm
  const product = {
    id: 1,
    name: 'Bưởi Ba Roi',
    price: '12.000 đ',
    quantity: 10
  }
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  