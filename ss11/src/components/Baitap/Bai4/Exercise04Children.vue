<template>
    <div>
      <h2>Exercise04 </h2>
      <p>Tuổi nhận được từ phụ huynh: {{ age }}</p>
    </div>
  </template>
  
  <script setup>
  import { onUpdated, watch, defineProps } from 'vue';
  
  
  const props = defineProps({
    age: Number
  });

  onUpdated(() => {
    alert("Giá trị của biến age đã thay đổi");
  });
  

  watch(() => props.age, (newAge, oldAge) => {
    console.log(`Age đã thay đổi từ ${oldAge} thành ${newAge}`);
  });
  </script>
  
  <style>
  </style>
  