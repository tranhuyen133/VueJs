<template>
    <div>
      <h1>-------- TodoApp Component --------</h1>
      <p>Id to delete: {{ idToDelete }}</p>
      <p>---------------------------------------------</p>
   
      <TodoItem @deleteTodo="handleDeleteTodo"></TodoItem>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TodoItem from '@/components/Baitap/Bai4/TodoItem.vue';

  const idToDelete = ref(null);
  
  
  const handleDeleteTodo = (id) => {
    idToDelete.value = id;
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  