<template>
    <div>
      <h1>Thông tin chi tiết sinh viên</h1>
      <div v-if="student">
        <p>ID: {{ student.id }}</p>
        <p>Tên: {{ student.student_name }}</p>
        <p>Email: {{ student.email }}</p>
        <p>Địa chỉ: {{ student.address }}</p>
        <p>Số điện thoại: {{ student.phone }}</p>
        <p>Trạng thái: {{ student.status ? 'Active' : 'Inactive' }}</p>
        <p>Ngày tạo: {{ student.created_at }}</p>
      </div>
      <div v-else>
        <p>{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const student = ref(null);
  const message = ref('');
  
  // Hàm lấy thông tin chi tiết một sinh viên theo id
  const getStudentById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      
      if (response.data) {
        console.log('Sinh viên tìm thấy:', response.data);
        student.value = response.data;
        message.value = '';
      } else {
        console.log('Không tìm thấy bản ghi');
        message.value = 'Không tìm thấy bản ghi';
      }
    } catch (error) {
      console.error('Lỗi khi lấy thông tin sinh viên:', error);
      message.value = 'Không tìm thấy bản ghi';
    }
  };
  
  // Ví dụ khi component được mounted sẽ gọi hàm với id sinh viên cần tìm
  onMounted(() => {
    const studentId = 1;  // Thay giá trị id này tùy ý
    getStudentById(studentId);
  });
  </script>
  
  <style scoped>
  p {
    margin: 5px 0;
  }
  </style>
  