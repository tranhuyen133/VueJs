<template>
    <div>
      <h1>Danh sách sinh viên</h1>
      <button @click="handleAddStudent">Thêm mới sinh viên</button>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Ngày thêm</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody v-for="student in students" :key="student.id">
          <tr>
            <td>{{ student.id }}</td>
            <td>{{ student.student_name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.address }}</td>
            <td>{{ student.phone }}</td>
            <td>{{ student.status ? "Active" : "Inactive" }}</td>
            <td>{{ student.created_at }}</td>
            <td>
              <button @click="getStudentById(student.id)">Info</button>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { onMounted, ref } from "vue";
  
  const students = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/students");
      students.value = response.data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  
  // Hàm lấy thông tin chi tiết một sinh viên theo id
  const getStudentById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/students/${id}`);
      console.log("Student Data: ", response.data);
    } catch (error) {
      console.log("Error fetching student by ID:", error);
    }
  };
  
  // Hàm thêm mới sinh viên
  const handleAddStudent = async () => {
    try {
      const response = await axios.post("http://localhost:8080/students", {
        student_name: "New Student",
        email: "newstudent@example.com",
        address: "123 New Street",
        phone: "0956789012",
        status: true,
        created_at: new Date().toISOString().split("T")[0],
      });
      console.log("Response: ", response);
      fetchData();
    } catch (error) {
      console.log("Error adding new student:", error);
    }
  };
  </script>
  
  <style></style>
  