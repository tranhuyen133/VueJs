<template>
    <div>
      <h3>Trước khi thay đổi:</h3>
      <div>Tiến độ hoàn thành: {{ progress }} %</div>
      <input v-model="progress" type="range" min="0" max="100">
  
      <h3>Sau khi thay đổi:</h3>
      <div>Tiến độ hoàn thành: {{ progress }} %</div>
      <input v-model="progress" type="range" min="0" max="100">
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
 
  const form = reactive({
    progress: 0 
  })
  
 
  const progress = form.progress
  </script>
  
  <style >
  </style>
  