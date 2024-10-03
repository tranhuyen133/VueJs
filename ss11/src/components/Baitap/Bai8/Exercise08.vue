<template>
    <div>
      <h1> Bài 8 : Chiều rộng cửa sổ: {{ windowWidth }}px</h1>
      <p>Màn hình khi resize còn {{ windowWidth }}px</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Khởi tạo biến windowWidth để lưu trữ chiều rộng cửa sổ
  const windowWidth = ref(window.innerWidth);
  
  // Hàm cập nhật chiều rộng cửa sổ khi sự kiện resize xảy ra
  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };
  
  // Sử dụng onMounted để lắng nghe sự kiện resize khi component được mount
  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });
  
  // Sử dụng onUnmounted để xóa sự kiện khi component bị hủy để tránh rò rỉ bộ nhớ
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
  </script>
  
  <style >
  </style>
  