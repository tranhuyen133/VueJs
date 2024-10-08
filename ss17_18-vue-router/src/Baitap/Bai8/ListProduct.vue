<template>
    <div>
      <h2>List product</h2>
      <input v-model="searchQuery" placeholder="Tìm kiếm theo tên" />
      <button @click="searchProduct">Tìm kiếm</button>
  
      <div v-if="filteredProducts.length">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} VND</p>
          <router-link :to="'/product-detail/' + product.id">
            <button>Xem chi tiết</button>
          </router-link>
        </div>
      </div>
      <p v-else>Không tìm thấy sản phẩm</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  // Mảng sản phẩm mẫu
  const products = [
    { id: 1, name: 'Điện thoại iPhone 15 Pro', price: '30.000.000', image: 'path_to_image' },
    { id: 2, name: 'Điện thoại OPPO Reno11 5G', price: '10.600.000', image: 'path_to_image' },
    { id: 3, name: 'Điện thoại vivo Y17s', price: '3.300.000', image: 'path_to_image' },
    { id: 4, name: 'Điện thoại Nokia 8210 4G', price: '3.300.000', image: 'path_to_image' }
  ];
  
  const router = useRouter();
  const route = useRoute();
  const searchQuery = ref(route.query.name || '');
  
  // Lưu sản phẩm vào localStorage
  onMounted(() => {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  });
  
  // Lọc sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = computed(() => {
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    if (!searchQuery.value) return allProducts;
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  // Thực hiện tìm kiếm sản phẩm
  const searchProduct = () => {
    router.push({ path: '/list-product', query: { name: searchQuery.value } });
  };
  </script>
  
  <style scoped>
  .product-card {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  
  .product-card img {
    width: 100px;
    height: 150px;
  }
  
  button {
    background-color: blue;
    color: white;
  }
  </style>
  