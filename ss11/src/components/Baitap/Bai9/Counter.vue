<template>
    <div>
      <h1>Bài 9 :Ứng dụng đếm số</h1>
      <p>Count: {{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  

  const count = ref(0);
  let intervalId = null;
  
 
  onMounted(() => {
    console.log("Lần đầu component được render");
    
    intervalId = setInterval(() => {
      count.value++;
    }, 1000);
  });
  
  
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  });
  </script>
  
  <style>
  </style>
  