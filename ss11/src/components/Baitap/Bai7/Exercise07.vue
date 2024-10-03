<template>
    <div>
      <h1>Bài7</h1>

      <input type="text" v-model="title" placeholder="Nhập tiêu đề mới" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';

  const title = ref('');
  
  watch(title, (newTitle) => {
    if (newTitle) {
      document.title = newTitle;
    }
  });
  </script>
  
  <style >
  </style>
  