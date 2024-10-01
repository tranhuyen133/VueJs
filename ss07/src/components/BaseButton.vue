<template>
    <!-- b2:Phat su kien thong qua emits -->
    <button @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script setup>
      const props = defineProps({
          title: {
              default:'Click me ',
              type: String,
              required: true,
          },
      });
      // B1: Khoi tao cac emits 
      const emit =defineEmits(["OnClick"]);
      console.log( "Props:",props);
      
      const handleClick = () =>{
        emit("OnClick","Xin chao cac ban ");

      }
  </script>
  
  <style>
  
  </style>