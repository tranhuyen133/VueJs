<template>
  <div>
    <h4>Bài4</h4>
    <!-- Hai nút "Hiển thị" và "Ẩn" -->
    <button @click="showMessage">Hiển thị</button>
    <button @click="hideMessage">Ẩn</button>

    <!-- Phần tử thông báo -->
    <p v-show="isVisible">
      Thông báo: <strong>Welcome to Rikkei Education</strong>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    // Biến isVisible với giá trị mặc định là false
    const isVisible = ref(false);

    // Hàm để hiển thị thông báo
    const showMessage = () => {
      isVisible.value = true;
    };

    // Hàm để ẩn thông báo
    const hideMessage = () => {
      isVisible.value = false;
    };

</script>

<style >
</style>
