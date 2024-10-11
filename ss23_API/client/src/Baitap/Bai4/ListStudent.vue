<template>
    <div>
      <h1>Danh sách sinh viên</h1>
  
      <!-- Form cập nhật thông tin sinh viên -->
      <div>
        <h2>Cập nhật thông tin sinh viên</h2>
        <form @submit.prevent="updateStudentById">
          <div>
            <label for="id">ID sinh viên:</label>
            <input v-model="updateStudent.id" id="id" required readonly />
          </div>
          <div>
            <label for="name">Tên sinh viên:</label>
            <input v-model="updateStudent.student_name" id="name" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input v-model="updateStudent.email" id="email" required />
          </div>
          <div>
            <label for="address">Địa chỉ:</label>
            <input v-model="updateStudent.address" id="address" required />
          </div>
          <div>
            <label for="phone">Số điện thoại:</label>
            <input v-model="updateStudent.phone" id="phone" required />
          </div>
          <div>
            <label for="status">Trạng thái:</label>
            <select v-model="updateStudent.status" id="status">
              <option :value="true">Active</option>
              <option :value="false">Inactive</option>
            </select>
          </div>
          <button type="submit">Cập nhật sinh viên</button>
        </form>
      </div>
  
      <!-- Danh sách sinh viên -->
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.student_name }}</td>
            <td>{{ student.email }}</td>
            <td>
              <button @click="editStudent(student)">Sửa</button>
              <button @click="removeById(student.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const students = ref([]);
  const updateStudent = ref({
    id: '',
    student_name: '',
    email: '',
    address: '',
    phone: '',
    status: true,
  });
  
  // Hàm để lấy danh sách sinh viên từ API
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/students');
      students.value = response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách sinh viên:', error);
    }
  };
  
  // Hàm để cập nhật thông tin sinh viên theo id
  const updateStudentById = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/students/${updateStudent.value.id}`, {
        ...updateStudent.value
      });
      console.log('Kết quả trả về từ server sau khi cập nhật:', response.data);
      
      // Xóa dữ liệu trong form và cập nhật lại danh sách sinh viên
      updateStudent.value = {
        id: " ",
        student_name: "",
        email: " ",
        address: " ",
        phone: " ",
        status: true
      };
      fetchStudents();  // Cập nhật danh sách sau khi cập nhật thành công
    } catch (error) {
      console.error('Lỗi khi cập nhật sinh viên:', error);
    }
  };
  
  // Hàm để điền dữ liệu sinh viên vào form khi nhấn nút "Sửa"
  const editStudent = (student) => {
    updateStudent.value = { ...student };
  };
  
  // Hàm để xóa sinh viên theo id
  const removeById = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/students/${id}`);
      console.log('Kết quả trả về từ server:', response.data);
      fetchStudents();  // Cập nhật lại danh sách sau khi xóa thành công
    } catch (error) {
      console.error('Lỗi khi xóa sinh viên:', error);
    }
  };
  
  // Gọi hàm để lấy danh sách sinh viên khi component được mounted
  onMounted(() => {
    fetchStudents();
  });
  </script>
  
  <style scoped>
  table {
    width: 100%;
    margin-top: 20px;
  }
  
  form {
    margin-bottom: 20px;
  }
  
  input, select {
    margin-bottom: 10px;
  }
  
  button {
    margin-right: 10px;
    cursor: pointer;
  }
  </style>
  