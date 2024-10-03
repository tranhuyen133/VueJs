<template>
    <div>
      <h1>Bài6</h1>
      <p>Current Count: {{ count }}</p>

      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const count = ref(0);
  
 
  const increment = () => {
    count.value++;
  };
  

  watch(count, (newValue) => {
    document.title = `Count: ${newValue}`; 
  });
  </script>
  
<style >
</style>
  