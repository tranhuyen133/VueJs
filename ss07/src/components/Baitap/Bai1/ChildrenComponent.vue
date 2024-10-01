<template>
    <div>
      <h1>Children Component</h1>
     
      <p>Children Company: {{ company }}</p>
    </div>
  </template>
  
  <script setup>
 
  const props = defineProps({
    company: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  