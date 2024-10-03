<template>
    <div>
      <h2>Bài 5</h2>
      <p>Hiển</p>
    </div>
  </template>
  
  <script setup>
  import { onBeforeUnmount, onUnmounted } from 'vue';
  

  onBeforeUnmount(() => {
    console.log('beforeUnmount: Component is about to be unmounted');
  });

  onUnmounted(() => {
    console.log('unmounted: Component has been unmounted');
  });
  </script>
  
  <style >
  </style>
  