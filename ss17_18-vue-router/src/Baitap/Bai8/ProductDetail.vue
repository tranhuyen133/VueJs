<template>
    <div>
      <h2>Product Detail</h2>
      <div v-if="product">
        <img :src="product.image" :alt="product.name" />
        <p><strong>Id:</strong> {{ product.id }}</p>
        <p><strong>ProductName:</strong> {{ product.name }}</p>
        <p><strong>Price:</strong> {{ product.price }} VND</p>
      </div>
      <p v-else>Không tìm thấy sản phẩm</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const product = ref(null);
  
  // Lấy thông tin sản phẩm dựa trên ID từ URL
  onMounted(() => {
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    const productId = route.params.id;
    product.value = allProducts.find(p => p.id === Number(productId));
  });
  </script>
  
  <style scoped>
  img {
    width: 150px;
    height: 200px;
  }
  </style>
  