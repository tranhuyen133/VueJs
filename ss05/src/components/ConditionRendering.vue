<template>
  <div>
    <h2>I . Lý thuyết </h2>
    <h3 >ConditonRendering</h3>
    <!-- v-if :được sử dụng khi khởi lệnh cho có 1 điều kiện -->
    <p v-if="isShow">Hiển thị phần tử</p>
    <p v-else>Ẩn phần tử</p>
    <button @click="handleToggle">Toggle</button>

    <br />
    <!-- v-if và v-else :được sử dụng khi khối lệnh có 2 điều kiện -->
    <p v-if= "age >= 18">Đủ tuổi thi</p>
    <p v-else>Chưa đủ tuổi thi</p>
    <p>Tuổi : {{age}}</p>
    <button @click="handleDecreaseAge">Giảm tuổi</button>
    <button @click="handleIncareaseAge">Tăng tuổi</button>

    <br />
     <!-- v-if và v-else-if , v-else :được sử dụng khi khối lệnh có 3 điều kiện trở lên -->
    <p v-if= "role === 'admin'">Quyền admin</p>
    <p v-else-if= "role ==='user'">Quyền user</p>
    <p v-else-if= "role === 'edit'"> Quyền edit</p>
    <p v-else>Quyền other</p>

    <!-- v-show :Hiển thị dữ liệu có điều kiện ,tuy nhiên là dữ đó không bị xóa khỏi DOM  mà nó chỉ ẩn đi thông qua display : none  -->
    <p v-show="isShowForm">Form Content</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isShow = ref(true);

const age = ref(0);

const role = ref("creator");

const isShowForm = ref(true);


const handleToggle = () => {
  isShow.value = !isShow.value;
};
//Hàm tăng tuổi
const handleIncareaseAge = () => {
  age.value++;
};
//Hàm giảm tuổi
const handleDecreaseAge = () => {
  age.value--;
};


// Tạo một biến tuổi . Nếu tuổi trên 18 thì sẽ hiển thị "Đủ tuổi thi" Ngược lại "Chua đủ tuổi thi"
//Kiểm tra diều kiện và render ra tên quyền tương ứng
</script>

<style>
</style>