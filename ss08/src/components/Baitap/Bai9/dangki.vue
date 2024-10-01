<template>
    <div>
      <h2>Đăng ký tài khoản</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="studentName">Tên sinh viên</label>
          <input v-model="form.studentName" id="studentName" type="text" placeholder="Nhập tên sinh viên" ref="studentNameInput" />
          <span v-if="errors.studentName">{{ errors.studentName }}</span>
        </div>
  
        <div>
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" placeholder="Nhập email" />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>
  
        <div>
          <label for="password">Mật khẩu</label>
          <input v-model="form.password" id="password" type="password" placeholder="Nhập mật khẩu" />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
  
        <div>
          <label for="address">Địa chỉ</label>
          <input v-model="form.address" id="address" type="text" placeholder="Nhập địa chỉ" />
        </div>
  
        <button type="submit">Đăng ký</button>
      </form>
  
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  
  const form = reactive({
    studentName: " ",
    email: " ",
    password: " ",
    address: " "
  });
  
  const errors = reactive({
    studentName: " ",
    email: " ",
    password: " "
  })
  
  const successMessage = ref("")
  

  const registeredEmails = ["Huyen@gmail.com", "bai9@gmail.com"];
  
  const handleSubmit = () => {
   
    errors.studentName = " ",
    errors.email = " ",
    errors.password = " ",
    successMessage.value = " "
  
  
    let valid = true;
  
    if (!form.studentName) {
      errors.studentName = "Tên sinh viên không được để trống"
      valid = false
    }
  
    if (!form.email) {
      errors.email = "Email không được để trống"
      valid = false
    } else if (registeredEmails.includes(form.email)) {
      errors.email = "Email đã tồn tại"
      valid = false
    }
  
    if (!form.password) {
      errors.password = "Mật khẩu không được để trống"
      valid = false
    }
  
    if (valid) {

      const user = {
        studentName: form.studentName,
        email: form.email,
        password: form.password,
        address: form.address
      }
      localStorage.setItem("user", JSON.stringify(user))
  
      form.studentName = " ",
      form.email = " ",
      form.password = " ",
      form.address = " ",
  

      successMessage.value = "Đăng ký tài khoản thành công"
  

      document.getElementById("studentName").focus()
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
    background-color: rgb(239, 117, 215);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(158, 17, 106);
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
  