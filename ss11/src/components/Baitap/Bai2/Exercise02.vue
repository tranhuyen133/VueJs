<template>
    <div>
      <h1>Bài2</h1>
      <p>Count: {{ count }}</p>
      <button @click="incrementCount">Counter</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const count = ref(0);
  
  const incrementCount = () => {
    count.value++;
  };v

  watch(count, (newValue, oldValue) => {
    console.log("Dữ liệu đã thay đổi từ", oldValue, "thành", newValue);
  });
  </script>
  
  <style >
  </style>
  