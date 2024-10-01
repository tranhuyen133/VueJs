<template>
    <div>
      <h3>Trước khi người dùng lựa chọn:</h3>
      <div>Sở thích:</div>
      <div>
        <input type="checkbox" value="Đá bóng" v-model="form.hobbies">
        Đá bóng
      </div>
      <div>
        <input type="checkbox" value="Bóng chuyền" v-model="form.hobbies">
        Bóng chuyền
      </div>
      <div>
        <input type="checkbox" value="Code" v-model="form.hobbies">
        Code
      </div>
      <div>
        <input type="checkbox" value="Bơi lội" v-model="form.hobbies">
       Bơi lội
      </div>
  
      <h3>Sau khi người dùng lựa chọn:</h3>
      <div>Sở thích: {{ form.hobbies }}</div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    hobbies: []  
  })
  </script>
  
  <style scoped>
  
  </style>
  