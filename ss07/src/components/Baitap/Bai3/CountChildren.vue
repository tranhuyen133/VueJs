<template>
    <div>
      <h1>-------- Children Component --------</h1>
      <button @click="emitIncrement">Increment</button>
    </div>
  </template>
  
  <script setup>
  // Phát sự kiện lên component cha khi nhấn nút
  const emitIncrement = () => {
    // Phát sự kiện 'increment' cho cha
    emit('increment');
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  
  button {
    padding: 8px 16px;
    font-size: 16px;
  }
  </style>
  