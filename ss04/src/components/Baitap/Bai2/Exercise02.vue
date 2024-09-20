<template>
  <div>
    <h4>Bai2</h4>
    <!-- Hiển thị giá trị của company và age -->
    <p>Company: {{ info.company }}</p>
    <p>Age: {{ info.age }}</p>
    <!-- Nút để thay đổi giá trị của company và age -->
    <button @click="changeData">Change data</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
 
    // Tạo đối tượng phản ứng với hai thuộc tính company và age
    const info = reactive({
      company: 'Rikkei Academy',
      age: 2
    });

    // Hàm để thay đổi giá trị của company và age
    const changeData = () => {
      info.company = 'Rikkei Education';
      info.age = 1;
    };
 
</script>

<style >

</style>
