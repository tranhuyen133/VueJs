<template>
    <div>
      <h1>Time :</h1>
    </div>
  </template>
  
  <script setup>
  import {
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    onUnmounted,
    onUpdated,
    ref,
  } from "vue";

  const time = ref(0);
  let timeId;

  // Giai doan Mounting
  onBeforeMount(() => {
    console.log("components before Mount");
   
  });
  
  onMounted(() => {
    setInterval(()=>{
        Time.value++;
    },1000)

    console.log("components mounted");
  
  });
  // Giai doan updating
  onBeforeUpdate(() => {
    console.log("components before update");
  });
  onUpdated(() => {
    console.log("components updated");
  });
  // giai doan UnMount
  onBeforeUnmount(() => {
    console.log("components before unmount");
    clearInterval(timeId);
  });
  onUnmounted(() => {
    console.log("components unmounted");
  });
  </script>
  
  <style></style>