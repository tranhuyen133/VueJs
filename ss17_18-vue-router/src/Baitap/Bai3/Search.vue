<template>
  <div>
    <h1>Bài 3</h1>
    <!-- Ô input để nhập từ khóa tìm kiếm -->
    <input type="text" v-model="keySearch" placeholder="Nhập sản phẩm" />
    <button @click="handleSearch">Tìm kiếm</button>
  
    <!-- Hiển thị kết quả sản phẩm được tìm từ query -->
    <p>Value: {{ result.productName }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Sử dụng router để điều hướng trang
const router = useRouter();
// Sử dụng route để lấy dữ liệu từ URL
const route = useRoute();

// Biến lưu giá trị tìm kiếm từ input
const keySearch = ref("");

// Hàm xử lý khi nhấn nút "Tìm kiếm"
const handleSearch = () => {
  router.push({
    name: "Search", // Chuyển đến trang có tên là 'Search'
    query: { productName: keySearch.value }, // Truyền query parameter productName
  });
};

// Biến result sẽ lấy giá trị từ query parameter trên URL
const result = computed(() => {
  return {
    productName: route.query.productName || "Không có sản phẩm",
  };
});
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
