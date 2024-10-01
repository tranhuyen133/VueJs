<template>
    <div>
      <h3>Trước khi người dùng lựa chọn:</h3>
      <div>
        Giới tính:
        <div>
          <input type="radio" id="male" value="Nam" v-model="form.gender">
          Nam
        </div>
        <div>
          <input type="radio" id="female" value="Nữ" v-model="form.gender">
          Nữ
        </div>
        <div>
          <input type="radio" id="other" value="Khác" v-model="form.gender">
          Khác
        </div>
      </div>
  
      <h3>Sau khi người dùng lựa chọn:</h3>
      <div>Giới tính: {{ form.gender }}</div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  
  const form = reactive({
    gender: " "
  });
  </script>
  
  <style >

  </style>
  