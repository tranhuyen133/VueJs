<template>
    <div>
      <h1>-------- TodoItem Component --------</h1>
      <button @click="emitDelete">Delete</button>
    </div>
  </template>
  
  <script setup>

  const todoId = 1;
  
  const emitDelete = () => {
    emit('deleteTodo', todoId);
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
  