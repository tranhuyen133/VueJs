<template>
    <div>
      <h2>Công ty hiện tại: {{ currentCompany }}</h2>
      <p>Tuổi: {{ age }}</p>
      <button @click="randomize">Random</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  

  const age = ref(1);
  

  const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"];
  

  const currentCompany = ref(companies[0]);

  const randomize = () => {
    age.value = Math.floor(Math.random() * 10) + 1;
  };
  

  watch(age, (newAge) => {
    if (newAge >= 1 && newAge <= 3) {
      currentCompany.value = companies[0];
    } else if (newAge >= 4 && newAge <= 6) {
      currentCompany.value = companies[1];
    } else {
      currentCompany.value = companies[2];
    }
  });
  </script>
  
  <style >
  </style>
  