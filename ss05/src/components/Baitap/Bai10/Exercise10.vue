<template>
  <div>
    <h3>Bài 10</h3>
    <!-- Nút để tạo số ngẫu nhiên -->
    <button @click="addRandomNumber">Random number</button>

    <!-- Hiển thị mảng các số nguyên -->
    <p>{{ numbers }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo mảng rỗng
const numbers = ref([]);

// Hàm để thêm số ngẫu nhiên vào mảng
const addRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 10) + 1; // Tạo số ngẫu nhiên từ 1 đến 10
  numbers.value.push(randomNum); // Thêm số ngẫu nhiên vào mảng
};
</script>

<style >

</style>
