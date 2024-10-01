<template>
    <div>
      <h3>Trước khi nhập dữ liệu:</h3>
      <div>
        Ngày sinh: <input v-model="form.dateOfBirth" type="date">
      </div>
      <div>Giá trị: {{ form.dateOfBirth }}</div>
  
      <h3>Sau khi nhập giá trị:</h3>
      <div>
        Ngày sinh: <input v-model="formattedDate" type="text" readonly>
      </div>
      <div>{{ formattedDate }}</div>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue'
  
  // Sử dụng reactive để lưu giá trị của ngày sinh
  const form = reactive({
    dateOfBirth: '' // Khởi tạo ngày sinh rỗng
  })
  
  // Sử dụng computed để định dạng ngày sinh theo định dạng mong muốn
  const formattedDate = computed(() => {
    if (!form.dateOfBirth) return ''
    const date = new Date(form.dateOfBirth)
    return date.toLocaleDateString('en-GB') // Định dạng ngày kiểu dd/mm/yyyy
  })
  </script>
  
  <style scoped>
  /* Thêm style nếu cần */
  </style>
  