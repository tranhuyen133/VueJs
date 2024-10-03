<template>
    <div>
      <h1>Children Component</h1>
      <p>Count {{ count }}</p>
      <input type="text" v-model="input">
      <button @click="handleClick">Count</button>
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
  // cac phuong thuc trong giai doan Mounting ( khoi tao )
  const count = ref(0);
  const input = ref("");
  const handleClick = ()=>{
      count.value++;
  }
  onBeforeMount(() => {
  //   count.value = 5;   
    console.log("before component mounted");
  });
  onMounted(() => {
  //   count.value = 6;
    console.log("component mouted");
  });
  // cac phuong thuc trong giai doan updation 
  onBeforeUpdate(()=>{
      document.title = input.value;
      console.log("before updated");
  })
  onUpdated(()=>{
      console.log("after updated");
      input.value = "Nguyen van A"
  })
  // caca phuong thuc trong giai doan unmount
  onBeforeUnmount(()=>{
      console.log("before component unmounted");
  })
  onUnmounted(()=>{
      console.log("component unmounted");
  })
  </script>
  
  <style></style>