<template>
  <div>
    <h3>Bài9</h3>
    <h3>Gender: {{ currentGender }}</h3>
    <button @click="randomGender">Random gender</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mảng chứa các giới tính
const genders = ['Nam', 'Nữ'];

// Biến mặc định giới tính là 'Nam'
const currentGender = ref('Nam');

// Hàm để chọn giới tính ngẫu nhiên
const randomGender = () => {
  const randomIndex = Math.floor(Math.random() * genders.length);
  currentGender.value = genders[randomIndex];
};
</script>

<style >

</style>
