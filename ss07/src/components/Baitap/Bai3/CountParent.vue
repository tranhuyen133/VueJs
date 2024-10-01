<template>
    <div>
      <h1>-------- Parent Component --------</h1>
      <p>Count: {{ count }}</p>
      <p>---------------------------------------------</p>
      <CountChildren @increment="incrementCount"></CountChildren>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CountChildren from '@/components/Baitap/Bai3/CountChildren.vue';
  
  const count = ref(0);
  
  const incrementCount = () => {
    count.value++;
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  