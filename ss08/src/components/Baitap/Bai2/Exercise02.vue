<template>
    <div>
      <h3>Trước khi người dùng chọn màu:</h3>
      <div>
        Màu sắc: <div :style="{ backgroundColor: form.color, width: '50px', height: '50px', border: '1px solid black' }"></div>
      </div>
      <div>Mã màu: {{ form.color }}</div>
  
      <h3>Sau khi người dùng chọn màu:</h3>
      <div>
        Màu sắc: 
        <input v-model="form.color" type="color">
      </div>
      <div>Mã màu: {{ form.color }}</div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    color: '#000000' 
  })
  </script>
  
  <style >

  </style>
  