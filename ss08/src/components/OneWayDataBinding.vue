<template>
  <div>
    <h2>Oneway Data Binding</h2>
    <h3>UserName : {{ userName }}</h3>
    <input type="text" :value="userName">
    <button @click="handleChangeName">Change Name</button>
  </div>
</template>

<script setup>

import { ref } from "vue" ;

const userName =  ref("Nguyễn Văn B");

const handleChangeName = () => {
    userName.value = "Nguyễn Văn A"
};
</script>

<style>

</style>