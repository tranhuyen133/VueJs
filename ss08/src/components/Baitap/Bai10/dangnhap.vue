<template>
    <div>
      <h2>Đăng nhập tài khoản</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email</label>
          <input v-model="loginData.email" value ="email" type="email" placeholder="Nhập email" />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
  
        <div>
          <label for="password">Mật khẩu</label>
          <input v-model="loginData.password" value ="password" type="password" placeholder="Nhập mật khẩu" />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
  
        <button type="submit">Đăng nhập</button>
      </form>
  
      <p v-if="loginMessage">{{ loginMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  
  const loginData = reactive({
    email: " ",
    password: " "
  })
  
  const errors = reactive({
    email: " ",
    password: " "
  })
  
  const loginMessage = ref("")
  
  const handleSubmit = () => {
   
    errors.email = "",
    errors.password = " ",
    loginMessage.value = " "
  
    let valid = true
  
    if (!loginData.email) {
      errors.email = "Email không được để trống",
      valid = false
    }
  
    if (!loginData.password) {
      errors.password = "Mật khẩu không được để trống",
      valid = false
    }
  
    if (valid) {
      // Lấy dữ liệu từ localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'))
  
      if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
        loginMessage.value = "Đăng nhập thành công"
      } else {
        loginMessage.value = "Đăng nhập thất bại"
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  label {
    margin-top: 10px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  
  button {
    background-color: rgb(215, 98, 120);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(208, 74, 154);
  }
  
  span {
    color: red;
    font-size: 12px;
  }
  
  p {
    color: green;
    font-size: 14px;
  }
  </style>
  