<template>
    <div>
      <h1>Exercise05 </h1>

      <button @click="toggleChild">Toggle</button> 
     
      <Exercise05Children v-if="showChild" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Exercise05Children from '@/components/Baitap/Bai5/Exercise05Children.vue';
  
  const showChild = ref(true);

  const toggleChild = () => {
    showChild.value = !showChild.value;
  };
  </script>
  
  <style >
  </style>
  