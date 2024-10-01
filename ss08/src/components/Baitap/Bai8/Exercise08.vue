<template>
  <div>
    <h2>Thêm mới tài khoản</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Họ và tên</label>
        <input v-model="user.name" id="name" type="text" placeholder="Nhập họ và tên" />
      </div>

      <div>
        <label for="email">Email</label>
        <input v-model="user.email" id="email" type="email" placeholder="Nhập email" />
      </div>

      <div>
        <label for="password">Mật khẩu</label>
        <input v-model="user.password" id="password" type="password" placeholder="Nhập mật khẩu" />
      </div>

      <div>
        <label for="confirmPassword">Nhập lại mật khẩu</label>
        <input v-model="user.confirmPassword" id="confirmPassword" type="password" placeholder="Nhập lại mật khẩu" />
      </div>

      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'


const user = reactive({
  name:"",
  email: "",
  password: "",
  confirmPassword: ""
})

// Hàm xử lý khi nhấn nút "Đăng ký"
const handleSubmit = () => {
  if (user.password !== user.confirmPassword) {
    console.error('Mật khẩu không khớp!')
  } else {
    console.log("Thông tin người dùng:", user)
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
  background-color: rgb(142, 237, 180);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: rgb(35, 103, 33);
}
</style>
