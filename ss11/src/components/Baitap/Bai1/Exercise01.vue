<template>
    <div>
      <h1>Exercise01 Component</h1>
      <p>Đây là component để kiểm tra vòng đời của component.</p>
      <p>Count: {{ count }}</p>
      <input type="text" v-model="input" placeholder="Nhập giá trị" />
      <button @click="handleClick">Tăng count</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const count = ref(0);
  const input = ref("");
  
 
  const handleClick = () => {
    count.value++;
  };
  

  onMounted(() => {
    console.log("Component mounted");
  });
  </script>

  